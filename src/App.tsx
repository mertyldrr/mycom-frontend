import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { Global } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Global styles={GlobalStyles} />
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
