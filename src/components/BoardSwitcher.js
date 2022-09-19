import React,  { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }
  
  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [count, setCount] = useState(0);
  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === (count % props.numBoards);
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={() => setCount(count + 1)}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
