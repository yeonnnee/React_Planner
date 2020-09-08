import React, { useState, useEffect } from "react";
import axios from "axios";
import TasksInput from "./TasksInput";

const useData = () => {
  const [state, setState] = useState({ tasks: [] });

  async function fetchData() {
    const fetchData = await axios.get("/api/tasks");
    const data = JSON.parse(fetchData.data);
    console.log(data);
    setState({ tasks: data });
    console.log(state);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return state;
};

function App() {
  const { tasks } = useData();

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
