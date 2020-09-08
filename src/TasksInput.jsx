import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const TasksInput = () => {
  const [state, setState] = useState({ tasks: { text: "", id: "" } });

  function onChange(event) {
    const value = event.target.value;
    setState({ tasks: { text: value, id: uuidv4().toString() } });
  }
  function onSubmit(event) {
    event.preventDefault();
    axios.post("/api", state);
    setState({ tasks: { text: "", id: "" } });
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={state.tasks.text} onChange={onChange}></input>
    </form>
  );
};

export default TasksInput;
