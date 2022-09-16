import React from "react";
import { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const[selectedIndex, changeSelected] = useState(0);

  let boards = [];
  const handleClick = (event) => {
    console.log(selectedIndex);
    if(selectedIndex === props.numBoards - 1){
      changeSelected(0);
    }else{
      changeSelected(selectedIndex + 1);
    }
  };

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectedIndex;

    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={(handleClick)}>Toggle </button>
    </div>
  );
}

export default BoardSwitcher;
