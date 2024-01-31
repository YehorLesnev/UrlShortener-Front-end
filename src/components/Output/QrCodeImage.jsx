import React from "react";
import QRCode from "react-qr-code";

const QrCodeImage = ({
    value,
    bgColor,
    fgColor
}) => {

    return (
        <QRCode
            size={256}
            viewBox={`0 0 256 256`}
            style={{ height: "auto", width: "15%", minWidth: "128px", maxWidth: "50%", margin: "20px" }}
            value={value}
            bgColor={bgColor}
            fgColor={fgColor}
            level="M"
            
        />
    );
}

export default QrCodeImage;