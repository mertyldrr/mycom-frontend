import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        {/* <Route path="/photos" element={<PhotoGallery />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
