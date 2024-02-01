import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlShorteningPage from "./pages/UrlShorteningPage/UrlShorteningPage.jsx";
import QrCodeGeneratorPage from "./pages/QrCodeGeneratorPage/QrCodeGeneratorPage.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { theme, getTheme } from '././styles/Themes';
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={getTheme(true)}>
      <CssBaseline/>
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
