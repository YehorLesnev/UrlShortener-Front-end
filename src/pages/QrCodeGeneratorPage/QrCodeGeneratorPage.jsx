import { SnackbarProvider } from "notistack";
import Header from "../../components/Header/Header";
import FormInput from "../../components/Input/FormInput";
import QRCodePageLink from "../../components/QRCode-link/QRCodePageLink.";
import Footer from "../../components/Footer/Footer";

function UrlShorteningPage() {
    return (
        <>
            <SnackbarProvider maxSnack={7}>
                <Header />
         
                
                <Footer />
            </SnackbarProvider>
        </>
    );
}

export default UrlShorteningPage;