import React from "react";
import ReactDOM from "react-dom/client";
import BoardSwitcher from "./components/BoardSwitcher";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className = "board-switcher">
    <BoardSwitcher  numBoards={5}/>
    </div>
  </React.StrictMode>
);
