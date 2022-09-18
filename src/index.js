import React from "react";
import ReactDOM from "react-dom/client";
import BoardSwitcher from "./components/BoardSwitcher";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    //Editting the constant number here will add the amount of boards there are
    <BoardSwitcher numBoards={5} />
  </React.StrictMode>
);
