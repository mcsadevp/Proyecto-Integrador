import Home from "./pages/Home";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <>
      <Header />

      <Main>
        <Home />
      </Main>

      <Footer />
    </>
  );
}
export default App;
