import React from "react";

const IncompleteTodos = (props) => {
  const { todos, onClick } = props;

  return (
    <section className="common-area">
      <ul className="todo-list">
        {todos.map((todo, index) => {
          return (
            <li className="todo">
              <span className="todo-task" key="todo">
                {todo}
              </span>
              <i
                className="fas fa-trash-alt fa-lg"
                onClick={() => onClick(index, "incomplete")}
              ></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default IncompleteTodos;
