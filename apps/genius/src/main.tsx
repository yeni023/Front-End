import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import StoryFlow from "./StoryFlow/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <App /> */}
      <StoryFlow />
    </RecoilRoot>
  </React.StrictMode>
);
