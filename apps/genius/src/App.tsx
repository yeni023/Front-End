import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./pages/genre/genre.tsx";
import StoryFlow from "./pages/StoryFlow/index";
import ThemePage from "./pages/Theme/ThemePage.tsx";
import MainHome from "./pages/MainHome/MainHome.tsx";
import CreateStory from "./pages/CreateStory/CreateStory.tsx";
import SelectChar from "./pages/SelectChar/SelectChar.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Genre />} />
        <Route path="/StoryWay" element={<StoryFlow />} />
        <Route path="/ThemePage" element={<ThemePage />} />
        <Route path="/MainHome" element={<MainHome />} />
        <Route path="/CreateStory" element={<CreateStory />} />
        <Route path="/SelectChar" element={<SelectChar />} />
      </Routes>
    </Router>
  );
};

export default App;
