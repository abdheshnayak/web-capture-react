import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Main />
    </>
  );
}

export default App;
