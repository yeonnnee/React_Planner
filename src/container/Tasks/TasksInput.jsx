/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";

import { ADD_TASKS, ADD_TASKS_FAILED } from "../../redux/types";
// import ErrorMessage from "../../components/ErrorMessage";

const Form = styled.form`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 320px;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #cfc0bd, inset -3px -3px 5px #e3d8d4,
    inset 1px 1px 3px #e3d8d4;
  &::placeholder {
    font-family: "Zilla Slab", serif;
  }
`;

const TasksInput = ({ add, setError }) => {
  const [state, setState] = useState({
    tasks: { text: "", id: "", status: "" },
  });

  function onChange(event) {
    const value = event.target.value;
    setState({
      tasks: { text: value, id: uuidv4().toString(), status: "PENDING" },
    });
    setError("");
  }
  async function onSubmit(event) {
    event.preventDefault();
    if (state.tasks.text !== "") {
      const res = await axios.post("/api/tasks", state);

      if (res.data !== "Get data successfully") {
        return setError(res.data.msg);
      }
      add(state.tasks);
      setState({ tasks: { text: "", id: "", status: "" } });
    }
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value={state.tasks.text}
          onChange={onChange}
          placeholder="Add a Task..."
        />
      </Form>
      <h1>{state.error}</h1>
    </>
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
    setError: (error) => {
      dispatch({ type: ADD_TASKS_FAILED, payload: error });
    },
  };
}

export default connect(null, mapDispatchToProps)(TasksInput);
