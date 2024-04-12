import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./pages/genre/genre.tsx";
import Genre2 from "./pages/genre2/genre2.tsx";
import StoryFlow from "./pages/StoryFlow/index";
import ThemePage from "./pages/ThemePage/ThemePage.tsx";
import MainHome from "./pages/MainHome/MainHome.tsx";
import CreateStory from "./pages/CreateStory/CreateStory.tsx";
import SelectChar from "./pages/SelectChar/SelectChar.tsx";
import ThemePageNext from "./pages/ThemePage/ThemePageNext.tsx";
import BasicInfo from "./pages/BasicInfo/BasicInfo.tsx";
import ChatDC from "./pages/ChatDC/ChatDC.tsx";
import ChatAC from "./pages/ChatAC/ChatAC.tsx";
import SelectLevel from "./pages/SelectLevel/SelectLevel.tsx";
import ConfirmLevel from "./pages/ConfirmLevel/ConfirmLevel.tsx";
import MakeBook from "./pages/Makebook/MakeBook.tsx";
import MakeBook2 from "./pages/Makebook2/MakeBook2.tsx";
import Login from "./pages/Login/Login.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import Tutorial from "./pages/Tutorial/Tutorial.tsx";
import DalkongTutorial from "./pages/CharacterTutorial/DalkongTutorial.tsx";
import AlkongTutorial from "./pages/CharacterTutorial/AlkongTutorial.tsx";
import Navbar from "./pages/Navbar/Navbar.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import MyPage from "./pages/MyPage/MyPage.tsx";

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

        <Route path="/BasicInfo" element={<BasicInfo />} />
        <Route path="/ChatDC" element={<ChatDC />} />
        <Route path="/ChatAC" element={<ChatAC />} />
        <Route path="/SelectLevel" element={<SelectLevel />} />
        <Route path="/ConfirmLevel" element={<ConfirmLevel />} />
        <Route path="/Makebook" element={<MakeBook />} />
        <Route path="/Makebook2" element={<MakeBook2 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tutorial" element={<Tutorial />} />
        <Route path="/AlkongTutorial" element={<AlkongTutorial />} />
        <Route path="/DalkongTutorial" element={<DalkongTutorial />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
