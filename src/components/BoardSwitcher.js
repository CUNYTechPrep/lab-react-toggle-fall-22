import React, {useState} from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [toggleValue, setToggleValue] = useState(0)

  const handleToggle = () => {
    setToggleValue((toggleValue + 1) % props.numBoards)

    // setting
    let boards = []
    for (let ii = 0; ii < props.numBoards; ii++) {
      let isSelected = ii === toggleValue;
      boards.push(<Board index={ii} selected={isSelected} key={ii} />);
    }
  }

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === toggleValue;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
