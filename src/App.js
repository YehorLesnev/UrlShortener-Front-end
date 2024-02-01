import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlShorteningPage from "./pages/UrlShorteningPage/UrlShorteningPage.jsx";
import QrCodeGeneratorPage from "./pages/QrCodeGeneratorPage/QrCodeGeneratorPage.jsx";
import { ThemeProvider } from '@emotion/react';
import { theme, getTheme } from '././styles/Themes';

function App() {
  return (
    <ThemeProvider theme={getTheme(true)}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UrlShorteningPage />} />
        <Route path="/qr" element={<QrCodeGeneratorPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
