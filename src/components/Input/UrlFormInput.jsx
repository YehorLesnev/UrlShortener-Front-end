import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/Themes';
import { apiConnectionHost, apiConnectionPort } from '../../Settings/appSettings';
import { enqueueSnackbar, closeSnackbar } from 'notistack';
import { isValidUrl, isValidInput } from './InputValidator';
import InputTextField from './InputTextField';
import ShortLinkOutput from '../Output/ShortLinkOutput';
import { Box } from '@mui/system';
import { msgErrorInvalidUrl, msgErrorTooLongText, msgSuccessUrlShorten } from '../../Settings/Messages';

const FormInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleInputChange = (event) => {
        if (false === isValidInput(event.target.value)) {
            enqueueSnackbar(msgErrorTooLongText, {
                variant: "error",
                autoHideDuration: 5000,
                anchorOrigin: { vertical: "bottom", horizontal: "right" },
                action: (key) => (
                    <Button color="inherit" size="small" onClick={() => closeSnackbar(key)}>
                        X
                    </Button>
                ),
            });

            return;
        }

        setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (false === isValidUrl(inputValue)) {
            enqueueSnackbar(msgErrorInvalidUrl, {
                variant: "error",
                autoHideDuration: 5000,
                anchorOrigin: { vertical: "bottom", horizontal: "right" },
                action: (key) => (
                    <Button color="inherit" size="small" onClick={() => closeSnackbar(key)}>
                        X
                    </Button>
                ),
            });

            return;
        }

        let response = await fetch(`https://${apiConnectionHost}:${apiConnectionPort}/api/shorten`, {
            method: 'POST',
            body: JSON.stringify({
                url: inputValue
            }),
            headers: {
                'accept': '*/*',
                'Content-type': 'application/json; charset=UTF-8',
            },
            mode: 'cors',
            cache: 'no-store'
        })

        let responseText = await response.json();
        let snackbarVariant = "success";

        if (200 === response.status) {
            setOutputValue(responseText);
            responseText = msgSuccessUrlShorten
        } else {
            snackbarVariant = "error";
        }

        enqueueSnackbar(responseText, {
            variant: snackbarVariant,
            autoHideDuration: 5000,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
            action: (key) => (
                <Button color="inherit" size="small" onClick={() => closeSnackbar(key)}>
                    X
                </Button>
            ),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    padding={2}
                    marginTop={3}
                >
                    <InputTextField title="Shorten your URL" inputValue={inputValue} handleInputChange={handleInputChange} />
                    <ShortLinkOutput outputValue={outputValue} />

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </ThemeProvider>
        </form>
    );
};

export default FormInput;