import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./pages/genre/genre.tsx";
import StoryFlow from "./pages/StoryFlow/index";
import ThemePage from "./pages/Theme/ThemePage.tsx";
import MainHome from "./pages/MainHome/MainHome.tsx";
import CreateStory from "./pages/CreateStory/CreateStory.tsx";
import SelectChar from "./pages/SelectChar/SelectChar.tsx";
import ThemePageNext from "./pages/Theme/ThemePageNext.tsx";
import BasicInfo from "./pages/BasicInfo/BasicInfo.tsx";
import ChatDC from "./pages/ChatDC/ChatDC.tsx";
import ChatAC from "./pages/ChatAC/ChatAC.tsx";
import SelectLevel from "./pages/SelectLevel/SelectLevel.tsx";
import ConfirmLevel from "./pages/ConfirmLevel/ConfirmLevel.tsx";
import Login from "./pages/Login/Login.tsx";

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
        <Route path="/ThemePageNext" element={<ThemePageNext />} />
        <Route path="/BasicInfo" element={<BasicInfo />} />
        <Route path="/ChatDC" element={<ChatDC />} />
        <Route path="/ChatAC" element={<ChatAC />} />
        <Route path="/SelectLevel" element={<SelectLevel />} />
        <Route path="/ConfirmLevel" element={<ConfirmLevel />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
