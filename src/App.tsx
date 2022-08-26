import Homepage from "./components/Homepage";
import { Global } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Global styles={GlobalStyles} />
      <div className="navbar-container">
        <p className="navbar-text">Home</p>
        <p className="navbar-text">About</p>
        <p className="navbar-text">Contact</p>
      </div>
      <Homepage />
    </div>
  );
}

export default App;
