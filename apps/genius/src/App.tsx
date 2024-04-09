import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./pages/genre/genre.tsx";
import Genre2 from "./pages/genre2/genre2.tsx";
import StoryFlow from "./pages/StoryFlow/index";
import ThemePage from "./pages/Theme/ThemePage.tsx";
import MainHome from "./pages/MainHome/MainHome.tsx";
import CreateStory from "./pages/CreateStory/CreateStory.tsx";
import SelectChar from "./pages/SelectChar/SelectChar.tsx";
import ThemePageNext from "./pages/Theme/ThemePageNext.tsx";
import BasicInfoPage from "./pages/BasicInfo/BasicInfoPage.tsx";
import SelectLevel from "./pages/SelectLevel/SelectLevel.tsx";
import ConfirmLevel from "./pages/ConfirmLevel/ConfirmLevel.tsx";
import MakeBook from "./pages/Makebook/MakeBook.tsx";
import MakeBook2 from "./pages/Makebook2/MakeBook2.tsx";
import Login from "./pages/Login/Login.tsx";
import Tutorial from "./pages/Tutorial/Tutorial.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Genre />} />
        <Route path="/Genre2" element={<Genre2 />} />
        <Route path="/StoryFlow" element={<StoryFlow />} />
        <Route path="/ThemePage" element={<ThemePage />} />
        <Route path="/MainHome" element={<MainHome />} />
        <Route path="/CreateStory" element={<CreateStory />} />
        <Route path="/SelectChar" element={<SelectChar />} />
        <Route path="/ThemePageNext" element={<ThemePageNext />} />
        <Route path="/BasicInfoPage" element={<BasicInfoPage />} />
        <Route path="/SelectLevel" element={<SelectLevel />} />
        <Route path="/ConfirmLevel" element={<ConfirmLevel />} />
        <Route path="/Makebook" element={<MakeBook />} />
        <Route path="/Makebook2" element={<MakeBook2 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tutorial" element={<Tutorial />} />
      </Routes>
    </Router>
  );
};

export default App;
