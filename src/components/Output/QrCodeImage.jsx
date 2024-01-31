import React from "react";
import QRCode from "qrcode.react";
import { IconButton, Tooltip } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/Themes';

const handleDownloadClick = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
        
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
}

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
                    style={{ height: "auto", width: "15%", minWidth: "128px", maxWidth: "50%", marginTop: "20px" }}
                    value={value}
                    bgColor={bgColor}
                    fgColor={fgColor}
                    level="M"
                    id="qrCodeEl"
                />

                <Tooltip title="Download">
                    <IconButton onClick={handleDownloadClick} style={{ marginTop: "1rem" }}>
                        <DownloadIcon style={{ color: "#e5322d", height: "50px", width: "auto" }} />
                    </IconButton>
                </Tooltip>
            </ThemeProvider>
        </>
    );
}

export default QrCodeImage;