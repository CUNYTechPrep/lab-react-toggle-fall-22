import React, {useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  const [numClicks, setNumClicks] = useState(0);
  const handleClick = (event) => {
    setNumClicks(numClicks + 1);
    return numClicks;
  };


  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === numClicks % 4;
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
