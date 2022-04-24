import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comtribute from "./pages/Comtribute";
import NoFound from "./pages/Nofound";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share" element={<Comtribute />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>
  );
};

export default App;

