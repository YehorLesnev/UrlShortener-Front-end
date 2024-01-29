import Header from "./components/Header/Header";
import FormInput from "./components/Input/FormInput";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>

      <FormInput></FormInput>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
