// import React from "react";
import React, {useState} from 'react';


function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  for (let ii = 0; ii < props.numboards; ii++) {
    let count = ii === 0;
    boards.push(<Board index={ii} selected={count} key={ii} />);
  }

  
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={() => setCount(count + 1)}>Toggle</button>
      <p>You clicked {count} time</p>
    </div>
    //click counter works
  );

}

export default BoardSwitcher;
