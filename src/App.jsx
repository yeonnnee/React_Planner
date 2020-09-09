import React from "react";

import getData from "./hooks/useGetData";
import TasksInput from "./TasksInput";

function App() {
  const { tasks } = getData();

  return (
    <div className="App">
      <h1>TASKS</h1>
      <TasksInput />
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
