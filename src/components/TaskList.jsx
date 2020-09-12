/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { DELETE_TASKS, FINISHED_TASKS } from "../redux/actions";
import axios from "axios";

const TaskList = ({ text, id, status, finish, deleteItem }) => {
  function finished() {
    let target = { id: id, text: text, status: status };
    if (target.status === "PENDING") {
      const result = { id: id, text: text, status: "FINISHED" };
      axios.patch("/api/tasks", result);
      finish(result);
    }
    if (target.status === "FINISHED") {
      const result = { id: id, text: text, status: "PENDING" };
      axios.patch("/api/tasks", result);
      finish(result);
    }
  }

  function deleteTask() {
    const target = { id: id, text: text, status: status };
    axios.put("/api/tasks", target);
    deleteItem(target);
  }
  return (
    <div>
      <input type="checkbox" onClick={finished} defaultChecked={false} />
      <li>{text}</li>
      <button onClick={deleteTask}>x</button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    finish: (task) => {
      dispatch({
        type: FINISHED_TASKS,
        payload: task,
      });
    },
    deleteItem: (id) => {
      dispatch({ type: DELETE_TASKS, payload: id });
    },
  };
}

export default connect(null, mapDispatchToProps)(TaskList);
