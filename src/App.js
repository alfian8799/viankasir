import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; // Perhatikan perubahan impor disini
import NavbarComponent from "./components/headers/NavbarComponent";


const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="movie/" element={<p>PERTAMA</p>} ></Route>
        <Route path="movie/:id" element={<p>KEDUA</p>} ></Route>
        <Route path="movie/:type" element={<p>KETIGA</p>} ></Route>
      </Routes>
    </Router>
  );
};

export default App;
