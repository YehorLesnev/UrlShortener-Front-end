import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlShorteningPage from "./pages/UrlShorteningPage/UrlShorteningPage.jsx";
import QrCodeGeneratorPage from "./pages/QrCodeGeneratorPage/QrCodeGeneratorPage.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from '././styles/Themes';
import { CssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // state: boolean ; true == use dark mode
  const [isDarkMode, setDarkMode] = useState(prefersDarkMode);

  return (
    <ThemeProvider theme={getTheme(isDarkMode)}>
      <CssBaseline />
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