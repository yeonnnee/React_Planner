import React, { useState, useEffect } from "react";

const useData = () => {
  const [state, setState] = useState({ username: "" });

  async function fetchData() {
    const data = await fetch("http://localhost:3001/api");
    const result = await data.json();
    console.log(result);
    setState({ username: result.username });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return state;
};

function App() {
  const { username } = useData();

  return (
    <div className="App">
      <h1>TASKS</h1>
      <form method="POST">
        <input type="text" name="task"></input>
        <button>submit</button>
      </form>
      <div>hello {username}</div>
    </div>
  );
}

export default App;
