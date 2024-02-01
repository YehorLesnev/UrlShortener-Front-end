import { IconButton, Tooltip } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

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

const DownloadButton = () => {
    return (
        <Tooltip title="Download">
            <IconButton onClick={handleDownloadClick} style={{ marginTop: "1rem" }}>
                <DownloadIcon style={{ color: "#e5322d", height: "50px", width: "auto" }} />
            </IconButton>
        </Tooltip>
    );
}

export default DownloadButton;