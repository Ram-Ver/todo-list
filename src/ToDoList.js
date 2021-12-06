import React from "react";

function ToDoList(props) {
  return (
    <>
      <li className="content">
        <h3>{props.data}</h3>
        <button
          onClick={() => {
            props.deleteList(props.id);
          }}>
          Delete
        </button>
      </li>
    </>
  );
}

export default ToDoList;
