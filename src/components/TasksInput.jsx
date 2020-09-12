/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { connect } from "react-redux";

import { ADD_TASKS } from "../redux/actions";

const TasksInput = ({ add }) => {
  const [state, setState] = useState({
    tasks: { text: "", id: "", status: "" },
  });

  function onChange(event) {
    const value = event.target.value;
    setState({
      tasks: { text: value, id: uuidv4().toString(), status: "PENDING" },
    });
  }
  function onSubmit(event) {
    event.preventDefault();
    if (state.tasks.text !== "") {
      axios.post("/api/tasks", state);
      add(state.tasks);
    }
    setState({ tasks: { text: "", id: "" } });
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={state.tasks.text} onChange={onChange}></input>
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    add: (state) => {
      dispatch({
        type: ADD_TASKS,
        payload: state,
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(TasksInput);
