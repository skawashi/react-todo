import React, { useState } from "react";
import "./styles.css";
import AddTask from "./components/AddTask";
import SearchWord from "./components/SearchWord";
import IncompleteTodos from "./components/IncompleteTodos";
import SearchTodos from "./components/SearchTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["task1", "task2"]);
  const [searchTodos, setSearchTodos] = useState([
    "検索機能はまだ実装されていません"
  ]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const pressEnter = (event) => {
    if (event.key === "Enter" && todoText !== "") {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };
  const onChangeSearchWord = (event) => {
    setSearchWord(event.target.value);
    // const newTodos = [];
    // setSearchTodos(
    //   incompleteTodos.map((todo) => {
    //     if (todo.startsWith(searchWord)) newTodos.push(todo);
    //     return newTodos;
    //   })
    // );
    // console.log(searchTodos);
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <AddTask
        todoText={todoText}
        onChange={onChangeTodoText}
        pressEnter={pressEnter}
      />
      <SearchWord searchWord={searchWord} onChange={onChangeSearchWord} />
      {searchWord === "" ? (
        <IncompleteTodos todos={incompleteTodos} onClick={onClickDelete} />
      ) : (
        <SearchTodos todos={searchTodos} />
      )}
    </>
  );
};
