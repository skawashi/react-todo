import React from "react";

const IncompleteTodos = (props) => {
  const { todos, onClick } = props;
  return todos.map((todo, index) => {
    return (
      <div>
        <ul>
          <li key={todo}>
            <div>
              <p>{todo}</p>
              <button onClick={() => onClick(index)}>削除</button>
            </div>
          </li>
        </ul>
      </div>
    );
  });
};

export default IncompleteTodos;
