import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import APIDoc from "./components/APIDoc";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/api">
            <APIDoc />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
