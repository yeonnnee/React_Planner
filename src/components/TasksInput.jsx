/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  /* box-shadow: 5px 5px 5px #ad8d92, -5px -5px 15px #e3d8d4,
    inset -5px -5px 5px #e3d8d4; */
  box-shadow: 5px 5px 5px #cfc0bd, inset -3px -3px 5px #e3d8d4,
    inset 1px 1px 3px #e3d8d4;
  &::placeholder {
    font-family: "Zilla Slab", serif;
  }
`;
const ErrorMessage = styled.div`
  margin-top: 8px;
  margin-left: 80px;
  font-size: 12px;
  color: #90323d;
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const TasksInput = ({ add }) => {
  const [state, setState] = useState({
    tasks: { text: "", id: "", status: "" },
  });
  const [error, setError] = useState({
    error: "",
    message: "",
  });

  function onChange(event) {
    const value = event.target.value;
    setState({
      tasks: { text: value, id: uuidv4().toString(), status: "PENDING" },
    });
  }
  async function onSubmit(event) {
    event.preventDefault();
    if (state.tasks.text !== "") {
      const res = await axios.post("/api/tasks", state);
      const result = res.data;
      if (result !== "Get data successfully") {
        return setError({ error: result.error, message: result.msg });
      }
    }
    add(state.tasks);
    setState({ tasks: { text: "", id: "", status: "" } });
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value={state.tasks.text}
          onChange={onChange}
          placeholder="Add a Task..."
        ></Input>
      </Form>
      {error.message !== "" ? (
        <ErrorMessage>
          <SFontAwesomeIcon icon={faExclamationCircle} />
          {error.message}
        </ErrorMessage>
      ) : null}
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
  };
}

export default connect(null, mapDispatchToProps)(TasksInput);
