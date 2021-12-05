import React, { useState } from "react";
import "./styles.css";
import AddTask from "./components/AddTask";
import SearchWord from "./components/SearchWord";
import IncompleteTodos from "./components/IncompleteTodos";
import SearchTodos from "./components/SearchTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["task1", "task2"]);
  const [searchTodos, setSearchTodos] = useState(["検索機能は未実装です"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const pressEnter = (event) => {
    if (event.key === "Enter" && todoText !== "") {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };
  const onChangeKeyWord = (event) => {
    setKeyWord(event.target.value);
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <div className="background">
        <h1 className="title">ToDo List</h1>
        <AddTask
          todoText={todoText}
          onChange={onChangeTodoText}
          pressEnter={pressEnter}
        />
        <SearchWord keyWord={keyWord} onChange={onChangeKeyWord} />
        {keyWord === "" ? (
          <IncompleteTodos todos={incompleteTodos} onClick={onClickDelete} />
        ) : (
          <SearchTodos todos={searchTodos} onClick={onClickDelete} />
        )}
      </div>
    </>
  );
};
