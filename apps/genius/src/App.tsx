import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./pages/genre/genre.tsx";
import StoryFlow from "./pages/StoryFlow/index";
import ThemePage from "./pages/ThemePage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Genre />} />
        <Route path="/StoryWay" element={<StoryFlow />} />
        <Route path="/ThemePage" element={<ThemePage />} />
      </Routes>
    </Router>
  );
};

export default App;
