import React, { useState } from "react";
import QrCodeImage from "../Output/QrCodeImage";
import InputTextField from "./InputTextField";
import { isValidInput } from "./QrCodeInputValidator";
import { enqueueSnackbar, closeSnackbar } from "notistack";
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/Themes';
import QrColorSelector from "./QrColorSelector";
import { Box } from '@mui/system';
import DownloadButton from "../DownloadButton/DownloadButton";

const QrCodeFormInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [fgColor, setFgColor] = useState('#000000');

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

            <Box display="flex" flexDirection="row" alignItems="center">
                <QrCodeImage
                    value={inputValue}
                    bgColor={bgColor}
                    fgColor={fgColor}
                />

                <QrColorSelector
                    bgColor={bgColor}
                    fgColor={fgColor}
                    setBgColor={setBgColor}
                    setFgColor={setFgColor}
                />
            </Box>
            <DownloadButton />
        </ThemeProvider>
    );
}

export default QrCodeFormInput;

