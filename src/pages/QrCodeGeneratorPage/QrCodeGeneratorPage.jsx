import { SnackbarProvider } from "notistack";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/system";
import QrCodeFormInput from "../../components/Input/QrCodeFormInput";
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../styles/Themes';

function UrlShorteningPage() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={7}>
                    <Header />
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        padding={2}
                        marginTop={3}
                    >

                        <QrCodeFormInput />

                    </Box>
                    <Footer />
                </SnackbarProvider>
            </ThemeProvider>
        </>
    );
}

export default UrlShorteningPage;