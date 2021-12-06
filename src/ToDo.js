import React, { useState } from "react";
import ToDoList from "./ToDoList";

function ToDo() {
  const [list, setList] = useState("");
  const [data, setData] = useState([]);

  const inputHandler = (event) => {
    setList(event.target.value);
  };

  const submitHandler = () => {
    if (list !== "") {
      setData((prev) => {
        return [...prev, list];
      });
    } else {
      return null;
    }
    setList("");
  };

  const deleteList = (id) => {
    setData((prev) => {
      return prev.filter((prev, index) => {
        return index !== id;
      });
    });
  };
  const allData = data.map((item, index) => {
    return (
      <ToDoList data={item} key={index} id={index} deleteList={deleteList} />
    );
  });
  return (
    <div className="common">
      <div className="todo-header">TODO LIST</div>
      <div className="todo-input-feild">
        <input
          className="todo-input"
          value={list}
          onChange={inputHandler}
          placeholder="add an item"
        />
        <button className="todo-button" onClick={submitHandler}>
          ADD
        </button>
      </div>
      <ul>{allData}</ul>
    </div>
  );
}

export default ToDo;
