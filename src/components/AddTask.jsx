import React from "react";

const AddTask = (props) => {
  const { todoText, onChange, pressEnter } = props;
  return (
    <section className="common-area">
      <h2 className="add-task">ADD TASK</h2>
      <input
        className="input-area"
        type="text"
        placeholder="New Task"
        value={todoText}
        onChange={onChange}
        onKeyPress={pressEnter}
      />
    </section>
  );
};

export default AddTask;
