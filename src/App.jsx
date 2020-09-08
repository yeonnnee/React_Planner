import React, { useState, useEffect } from "react";
import axios from "axios";
import TasksInput from "./TasksInput";

const useData = () => {
  const [state, setState] = useState({ tasks: { text: "", id: "" } });

  async function fetchData() {
    const fetchData = await axios.get("/api");
    const data = fetchData.data;
    console.log(data);
    setState({ tasks: { text: data.tasks.text, id: data.tasks.id } });
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
        <li>{tasks.map((task) => task.text)}</li>
      </ul>
    </div>
  );
}

export default App;
