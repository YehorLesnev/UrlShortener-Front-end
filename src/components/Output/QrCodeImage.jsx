import React from "react";
import QRCode from "qrcode.react";

const QrCodeImage = ({
    value,
    bgColor,
    fgColor
}) => {

    return (
        <>
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
        </>
    );
}

export default QrCodeImage;