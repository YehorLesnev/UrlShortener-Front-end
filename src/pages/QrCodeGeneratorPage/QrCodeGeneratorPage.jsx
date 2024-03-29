import { SnackbarProvider } from "notistack";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/system";
import QrCodeFormInput from "../../components/Input/QrCodeFormInput";

function UrlShorteningPage() {
    return (
        <>
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
        </>
    );
}

export default UrlShorteningPage;