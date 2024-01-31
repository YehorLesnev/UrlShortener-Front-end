import React from 'react'
import { theme } from '../../styles/Themes';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import qrcodelogo from "../../utils/qr-code-logo.png";
import Box from '@mui/material/Box';

const QRCodePageLink = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding={2}
                marginTop={5}>
                <Button>
                    <img src={qrcodelogo} alt="Logo" style={{
                        height: '30px',
                        width: 'auto',
                        margin: '5px'
                    }} />
                    <Typography variant="subtitle1" sx={{ flexGrow: 3, fontSize: "clamp(1rem, 1.5vw, 2rem)" }
                    } className='hover-logo font-size-responsive' >
                        Generate QR code
                    </Typography>
                </Button>
            </Box>
        </ThemeProvider>
    );
}

export default QRCodePageLink;