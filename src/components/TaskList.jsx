/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { FINISHED_TASKS } from "../redux/actions";
import axios from "axios";

const TaskList = ({ text, id, finish }) => {
  function finished() {
    const target = { id: id, text: text, status: "FINISHED" };
    axios.put("/api/tasks", target);
    finish(target);
  }
  return (
    <div>
      <input type="checkbox" onClick={finished} defaultChecked={false} />
      <li>{text}</li>
      <button>x</button>
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
  };
}

export default connect(null, mapDispatchToProps)(TaskList);
