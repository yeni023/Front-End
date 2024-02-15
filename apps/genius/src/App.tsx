import React from "react";
import ThemePage from "./pages/ThemePage";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/ThemePage" element={<ThemePage/>}/>
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;