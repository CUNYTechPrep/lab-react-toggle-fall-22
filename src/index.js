import React from "react";
import ReactDOM from "react-dom/client";
import BoardSwitcher from "./components/BoardSwitcher";
import "./index.css";

// GITHUB REPO: https://github.com/CUNYTechPrep/lab-react-toggle

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BoardSwitcher numBoards={5} /> 
  </React.StrictMode>
);
