import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [selected, setSelected] = useState(0);
  let boards = [];

  for (let i = 0; i < props.numBoards; i++) {
    let isSelected = i === selected;
    boards.push(<Board index={i} selected={isSelected} key={i} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button
        onClick={() => {
          const nextSelect = selected + 1;
          setSelected(nextSelect >= props.numBoards ? 0 : nextSelect);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default BoardSwitcher;
