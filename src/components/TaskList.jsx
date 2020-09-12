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

const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid #5a2330;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a2330;
  cursor: Default;
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
    if (status === "PENDING") {
      const completed = { id: id, text: text, status: "FINISHED" };
      axios.patch("/api/tasks", completed);
      change(completed);
    }
    if (status === "FINISHED") {
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
      <CheckBox onClick={changeStatus}>
        {status === "PENDING" ? "" : "v"}
      </CheckBox>
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
