import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { apiConnectionHost, apiConnectionPort } from '../../Settings/appSettings';
import { enqueueSnackbar, closeSnackbar } from 'notistack';
import { isValidUrl, isValidInput } from './InputValidator';
import InputTextField from './InputTextField';
import ShortLinkOutput from '../Output/ShortLinkOutput';
import { Box } from '@mui/system';
import { msgErrorInvalidUrl, msgErrorTooLongText, msgSuccessUrlShorten } from '../../Settings/Messages';
import { CircularProgress } from '@mui/material';
const FormInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [isLoading, setLoading] = useState(false);

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

        let response, responseText;
        setLoading(true);
        if (false === isLoading) {
            response = await fetch(`https://${apiConnectionHost}:${apiConnectionPort}/api/shorten`, {
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

            responseText = await response.json();
            setLoading(false)
        }

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

                <Box sx={{ m: 1, position: "relative" }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isLoading}
                    >
                        Submit
                    </Button>

                    {/* Loader */}
                    {isLoading && (
                        <CircularProgress
                            size={25}
                            sx={{
                                color: "#e5322d",
                                position: "absolute",
                                top: 5,
                                left: 30,
                                zIndex: 1,
                            }}
                        />
                    )}
                </Box>
            </Box>
        </form>
    );
};

export default FormInput;