import React, { useState } from "react";
import QrCodeImage from "../Output/QrCodeImage";
import InputTextField from "./InputTextField";
import { isValidInput } from "./QrCodeInputValidator";
import { enqueueSnackbar, closeSnackbar } from "notistack";
import { Button } from "@mui/material";

const QrCodeFormInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

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
        <>
            <InputTextField title="Generate QR code" inputValue={inputValue} handleInputChange={handleInputChange} />

            <QrCodeImage value={inputValue} />
        </>
    );
}

export default QrCodeFormInput;

