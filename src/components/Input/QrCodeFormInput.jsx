import React, { useState } from "react";
import QrCodeImage from "../Output/QrCodeImage";
import InputTextField from "./InputTextField";

const QrCodeFormInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleInputChange = (event) => {
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

