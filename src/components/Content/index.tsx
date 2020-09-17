import React, { useEffect, useState } from 'react';

function Content({...props}) {

  const[visibility, setVisibility] = useState(false);

  function handleClick() {
    props.onClick(visibility ? props.count - 1 : props.count + 1)
    setVisibility(!visibility)
  }

  useEffect(() => {
    close();
  }, [props.refresh]);

  function close() {
    setVisibility(false);
    props.onClick(0);
  }

  return (
    <li className={"card"} onClick={handleClick}>
      <div>{props.todo.title}</div>
      {visibility && <div>
        <p>{props.todo.content}</p>
        <button onClick={handleClick}>Close</button>
      </div>}
    </li>
  );
}

export default Content;
