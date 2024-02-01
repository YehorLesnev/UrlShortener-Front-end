import React from "react";
import QRCode from "qrcode.react";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/Themes';

const QrCodeImage = ({
    value,
    bgColor,
    fgColor
}) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                    <QRCode
                        size={256}
                        viewBox={`0 0 256 256`}
                        style={{ height: "auto", width: "40%", minWidth: "128px", maxWidth: "100%", marginTop: "20px" }}
                        value={value}
                        bgColor={bgColor}
                        fgColor={fgColor}
                        level="M"
                        id="qrCodeEl"
                    />
            </ThemeProvider>
        </>
    );
}

export default QrCodeImage;