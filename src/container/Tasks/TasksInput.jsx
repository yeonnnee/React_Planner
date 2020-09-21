/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";

import { ADD_TASKS_SUCCESS, ADD_TASKS_FAILED } from "../../redux/types";
import ErrorMessage from "../../components/ErrorMessage";

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

const TasksInput = ({ add, setError, error }) => {
  const [state, setState] = useState({
    tasks: { content: "", id: "", status: "" },
  });

  function onChange(event) {
    const value = event.target.value;
    setState({
      tasks: { content: value, id: uuidv4().toString(), status: "PENDING" },
    });
    setError("");
  }
  async function onSubmit(event) {
    event.preventDefault();
    try {
      if (state.tasks.content !== "") {
        const res = await axios.post("/api/tasks", state);

        if (res.data !== "Get data successfully") {
          setError(res.data.msg);
        }
        add(state);
        setState({ tasks: { content: "", id: "", status: "" } });
      }
    } catch (error) {
      setError("문제가 발생했습니다. 잠시 후 다시 시도해주십시오");
    }
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value={state.tasks.content}
          onChange={onChange}
          placeholder="Add a Task..."
        />
      </Form>
      {error !== "" ? <ErrorMessage {...state} /> : null}
    </>
  );
};

function mapStateToProps(state) {
  return { error: state.tasksReducer.error };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (state) => {
      dispatch({
        type: ADD_TASKS_SUCCESS,
        payload: state.tasks,
      });
    },
    setError: (error) => {
      dispatch({ type: ADD_TASKS_FAILED, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksInput);
