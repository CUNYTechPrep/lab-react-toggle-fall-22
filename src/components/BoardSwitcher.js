import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  //selected is how many times the button is used
  const [selected, setSelected] = useState(0);
  //Event Handler for when you click the button
  const handleClick = () => {
    //Will reset every numBoards value.
    setSelected((selected + 1) % props.numBoards);
  };


  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    //Changed 0 to selected in order for the board to move
    let isSelected = ii === selected;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }
  
  //Button uses handleClick class to handle the event whenever the button is clicked
  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick = {handleClick}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
