/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { CHANGE_STATUS, DELETE_TASKS } from "../../redux/types";
import axios from "axios";
import styled from "styled-components";

const List = styled.li`
  padding: 5px 15px;
  display: grid;
  grid-template-columns: 20px 150px 30px;
  font-size: 15px;
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

const TaskList = ({ content, id, status, change, deleteItem }) => {
  function changeStatus() {
    if (status === "PENDING") {
      const completed = { id: id, content: content, status: "FINISHED" };
      axios.patch("/api/tasks", completed);
      change(completed);
    }
    if (status === "FINISHED") {
      const uncompleted = { id: id, content: content, status: "PENDING" };
      axios.patch("/api/tasks", uncompleted);
      change(uncompleted);
    }
  }

  function deleteTask() {
    const target = { id: id, content: content, status: status };
    axios.delete("/api/tasks", target);
    deleteItem(target);
  }
  return (
    <List>
      <CheckBox onClick={changeStatus}>
        {status === "PENDING" ? "" : "v"}
      </CheckBox>
      {content}
      <DelBtn onClick={deleteTask}>X</DelBtn>
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
