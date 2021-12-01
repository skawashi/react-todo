import React from "react";

const AddTask = (props) => {
  const { todoText, onChange, pressEnter } = props;
  return (
    <div>
      <h2>ADD TASK</h2>
      <input
        placeholder="New Task"
        value={todoText}
        onChange={onChange}
        onKeyPress={pressEnter}
      />
    </div>
  );
};

export default AddTask;
