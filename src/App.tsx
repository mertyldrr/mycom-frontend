import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";
import "./App.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        {/* <Route path="/photos" element={<PhotoGallery />}></Route> */}
      </Routes>
    </Box>
  );
}

export default App;
