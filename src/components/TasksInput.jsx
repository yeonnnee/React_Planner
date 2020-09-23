/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

import ErrorMessage from "./msg/ErrorMessage";

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

const TasksInput = ({ content, error, onChange, onSubmit }) => {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value={content}
          onChange={onChange}
          placeholder="Add a Task..."
        />
      </Form>
      {error !== "" ? <ErrorMessage error={error} /> : null}
    </>
  );
};

export default TasksInput;
