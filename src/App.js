import Header from "./components/Header/Header";
import FormInput from "./components/Input/FormInput";
import Footer from "./components/Footer/Footer";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={7}>
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>

      <FormInput></FormInput>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
    </SnackbarProvider>
  );
}

export default App;
