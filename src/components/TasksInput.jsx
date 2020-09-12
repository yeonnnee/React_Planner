/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";

import { ADD_TASKS } from "../redux/actions";

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
  box-shadow: 5px 5px 5px #ad8d92, -5px -5px 15px #e3d8d4,
    inset -5px -5px 5px #e3d8d4;

  &::placeholder {
    font-family: "Zilla Slab", serif;
  }
`;

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
    <Form onSubmit={onSubmit}>
      <Input type="text" value={state.tasks.text} onChange={onChange}></Input>
    </Form>
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
