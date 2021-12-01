import React from "react";

const SearchTodos = (props) => {
  const { todos } = props;
  return todos.map((todo, index) => {
    return (
      <div>
        <ul>
          <li key={todo}>
            <div>
              <p>{todo}</p>
              {/* <button onClick={() => onClickDelete(index)}>削除</button> */}
            </div>
          </li>
        </ul>
      </div>
    );
  });
};

export default SearchTodos;
