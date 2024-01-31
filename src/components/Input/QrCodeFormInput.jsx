import React, { useState } from "react";
import QrCodeImage from "../Output/QrCodeImage";
import InputTextField from "./InputTextField";
import { isValidInput } from "./QrCodeInputValidator";
import { enqueueSnackbar, closeSnackbar } from "notistack";
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/Themes';

const QrCodeFormInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        if (false === isValidInput(event.target.value)) {
            enqueueSnackbar("Specified text is too long (Max length is 2331)", {
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

    return (
        <ThemeProvider theme={theme}>
            <InputTextField title="Generate QR code" inputValue={inputValue} handleInputChange={handleInputChange} />

            <QrCodeImage value={inputValue} />
        </ThemeProvider>
    );
}

export default QrCodeFormInput;

