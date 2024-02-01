import React from 'react';
import { SnackbarProvider } from "notistack";
import Header from "../../components/Header/Header";
import UrlFormInput from "../../components/Input/UrlFormInput";
import QRCodePageLink from "../../components/QRCode-link/QRCodePageLink.";
import Footer from "../../components/Footer/Footer";

function UrlShorteningPage() {
    return (
        <>
            <SnackbarProvider maxSnack={7}>
                <Header />
                    <UrlFormInput />
                    <QRCodePageLink />
                <Footer />
            </SnackbarProvider>
        </>
    );
}

export default UrlShorteningPage;