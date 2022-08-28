import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Global styles={GlobalStyles} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
