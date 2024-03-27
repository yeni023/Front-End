import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./pages/genre/genre.tsx";
import StoryFlow from "./pages/StoryFlow/index";
import ThemePage from "./pages/Theme/ThemePage.tsx";
import MainHome from "./pages/MainHome/MainHome.tsx";
import CreateStory from "./pages/CreateStory/CreateStory.tsx";
import SelectChar from "./pages/SelectChar/SelectChar.tsx";
import Login from "./pages/Login/Login.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import SelectQuestion from "./pages/SelectQue/SelectQuestion.tsx";
import Tutorial from "./pages/Tutorial/Tutorial.tsx";

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
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Tutorial" element={<Tutorial />} />
        <Route path="/SelectQuestion" element={<SelectQuestion />} />
      </Routes>
    </Router>
  );
};

export default App;
