import { SnackbarProvider } from "notistack";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InputTextField from "../../components/Input/InputTextField";
import { Box } from "@mui/system";

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
                    marginTop={5}
                >
                    <InputTextField />
                </Box>
                <Footer />
            </SnackbarProvider>
        </>
    );
}

export default UrlShorteningPage;