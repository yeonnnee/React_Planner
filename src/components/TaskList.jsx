/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { CHANGE_STATUS, DELETE_TASKS } from "../redux/actions";
import axios from "axios";
import styled from "styled-components";

const List = styled.li`
  padding: 5px 20px;
  display: grid;
  grid-template-columns: 20px 1fr 20px;
`;
const CheckBtn = styled.input`
  display: none;
`;
const Label = styled.label`
  width: 15px;
  height: 15px;
  border: 1px solid #5a2330;
  opacity: 0.6;
  &:hover {
    opacity: 1;
    border: 1px solid #5a2330;
  }
`;
const DelBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: #5a2330;
  }
`;

const TaskList = ({ text, id, status, change, deleteItem }) => {
  function changeStatus() {
    const target = { id: id, text: text, status: status };
    if (target.status === "PENDING") {
      const completed = { id: id, text: text, status: "FINISHED" };
      axios.patch("/api/tasks", completed);
      change(completed);
    }
    if (target.status === "FINISHED") {
      const uncompleted = { id: id, text: text, status: "PENDING" };
      axios.patch("/api/tasks", uncompleted);
      change(uncompleted);
    }
  }

  function deleteTask() {
    const target = { id: id, text: text, status: status };
    axios.put("/api/tasks", target);
    deleteItem(target);
  }
  return (
    <List>
      <CheckBtn
        type="checkbox"
        onClick={changeStatus}
        defaultChecked={false}
        id={id}
      />
      <Label htmlFor={id}></Label>
      {text}
      <DelBtn onClick={deleteTask}>x</DelBtn>
    </List>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    change: (task) => {
      dispatch({
        type: CHANGE_STATUS,
        payload: task,
      });
    },
    deleteItem: (id) => {
      dispatch({ type: DELETE_TASKS, payload: id });
    },
  };
}

export default connect(null, mapDispatchToProps)(TaskList);
