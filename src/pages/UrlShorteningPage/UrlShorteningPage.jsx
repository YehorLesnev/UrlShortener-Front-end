import React from 'react';
import { SnackbarProvider } from "notistack";
import Header from "../../components/Header/Header";
import UrlFormInput from "../../components/Input/UrlFormInput";
import QRCodePageLink from "../../components/QRCode-link/QRCodePageLink.";
import Footer from "../../components/Footer/Footer";
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../styles/Themes';

function UrlShorteningPage() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={7}>
                    <Header />
                    <UrlFormInput />
                    <QRCodePageLink />
                    <Footer />
                </SnackbarProvider>
            </ThemeProvider>
        </>
    );
}

export default UrlShorteningPage;