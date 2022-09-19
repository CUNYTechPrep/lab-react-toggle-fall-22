import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];

  const [currBoard, setBoard] = useState(0); 

  const handleBoard = (event) => {    
    setBoard(currBoard + 1);

    if(currBoard === props.numBoards-1) { 
      setBoard(0);
    }    
  };

  for (let ii = 0; ii < props.numBoards; ii++) {
  let isSelected = ii === currBoard;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleBoard}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
