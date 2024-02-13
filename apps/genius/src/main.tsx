import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RecoilRoot } from "recoil";
import Genre from "../src/genre/genre.tsx";
import StoryFlow from "./StoryFlow/index.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <App /> */}
      <StoryFlow />
      <Genre />
    </RecoilRoot>
  </React.StrictMode>
);
