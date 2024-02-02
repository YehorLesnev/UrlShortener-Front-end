import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlShorteningPage from "./pages/UrlShorteningPage/UrlShorteningPage.jsx";
import QrCodeGeneratorPage from "./pages/QrCodeGeneratorPage/QrCodeGeneratorPage.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from '././styles/Themes';
import { CssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import ThemeSwitch from "./components/DarkModeSwitch/ThemeSwitch.jsx";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const localStorageMode = JSON.parse(localStorage.getItem('isDarkMode'));

  // state: boolean ; true == use dark mode
  const [isDarkMode, setDarkMode] = useState(null === localStorageMode ? prefersDarkMode : localStorageMode);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem('isDarkMode'));
    if(mode){
      setDarkMode(mode);
    }
  }, []);

  return (
    <ThemeProvider theme={getTheme(isDarkMode)}>
       <CssBaseline />
      <BrowserRouter>
        <ThemeSwitch isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
        <Routes>
          <Route path="/" element={<UrlShorteningPage />} />
          <Route path="/qr" element={<QrCodeGeneratorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;