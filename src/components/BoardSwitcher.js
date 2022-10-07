import React from "react";
import {useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selectedBoard, setSelectedBoard] = useState(0);

  const handleClick = () => {
    setSelectedBoard((selectedBoard + 1) % props.numBoards);
    console.log("clicked button")
  };

  let boards = [];

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectedBoard;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
