import React, {useState} from "react";

//setting the classname
function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
 
  const [activeBoard, setActiveBoard] = useState(0);
  const nextActiveBoard = (event) => {setActiveBoard((activeBoard + 1) % props.numBoards)};

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    
   let isSelected = ii === activeBoard ;
   boards.push(<Board index={ii} selected={isSelected} key={ii} />);
       
  }
  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={(nextActiveBoard)}>Toggle</button>
    </div>
  );
}



export default BoardSwitcher;
