import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import Genre from "../src/genre/genre.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Genre />
    </RecoilRoot>
  </React.StrictMode>
);
