import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/Themes';
import { apiConnectionHost, apiConnectionPort } from '../../appSettings';
import { enqueueSnackbar, closeSnackbar } from 'notistack';
import { isValidUrl } from './UrlValidator';

const FormInput = () => {
    const [inputValue, setInputValue] = useState(' ');
    const [outputValue, setOutputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(false === isValidUrl(inputValue)){
            enqueueSnackbar("Specified URL is invalid or not http/https protocol", {
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
            responseText = "Url shortened successfully"
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
                    marginTop={5}
                >
                    <Typography variant="h5" color="black" margin={3}>
                        Shorten your URL
                    </Typography>

                    <TextField
                        label="Enter URL"
                        variant="outlined"
                        value={inputValue}
                        onChange={handleInputChange}
                        InputProps={{
                            style: {
                                color: '#393c47',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#393c47',
                            },
                        }}
                    />

                    <TextField
                        helperText="Short URL"
                        variant="filled"
                        margin="normal"
                        value={outputValue}
                        InputProps={{
                            readOnly: true,
                            style: {
                                color: '#393c47',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#393c47',
                            },
                        }}
                    />

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </ThemeProvider>
        </form>
    );
};

export default FormInput;