import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlShorteningPage from "./pages/UrlShorteningPage/UrlShorteningPage.jsx";
import QrCodeGeneratorPage from "./pages/QrCodeGeneratorPage/QrCodeGeneratorPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UrlShorteningPage />} />
        <Route path="/qr" element={<QrCodeGeneratorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
