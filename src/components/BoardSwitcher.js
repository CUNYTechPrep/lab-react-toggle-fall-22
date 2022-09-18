import React, {useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }
  

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];

  const [toggleClick, totalClick] = useState(0);

  const handleClick = (event) =>{
    totalClick((toggleClick + 1) % props.numBoards );
  };

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === toggleClick;
    console.log(`Selecting ${toggleClick} `);
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }
  //
  
  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={(e) => handleClick(e)}>Toggle</button>
     {/* / */}
    </div>
  );
}

export default BoardSwitcher;
