import React from "react";
import { connect } from "react-redux";
import { CHANGE_STATUS, DELETE_TASKS } from "../../redux/types";

import { taskApi } from "../../api";
import { ListItem, CheckBox, DelBtn } from "./styles";

const TaskList = (taskListProps) => {
  const { content, id, status, change, deleteItem, history } = taskListProps;

  async function changeStatus() {
    if (status === "PENDING") {
      try {
        const completed = { id: id, content: content, status: "FINISHED" };
        await taskApi.patchTask(completed);
        change(completed);
      } catch (error) {
        const res = error.response;
        if (res.status === 500) {
          history.push("/500");
        } else if (res.status === 504) {
          history.push("/504");
        } else {
          return;
        }
      }
    }
    if (status === "FINISHED") {
      try {
        const uncompleted = { id: id, content: content, status: "PENDING" };
        taskApi.patchTask(uncompleted);
        change(uncompleted);
      } catch (error) {
        const res = error.response;
        if (res.status === 500) {
          history.push("/500");
        } else if (res.status === 504) {
          history.push("/504");
        } else {
          return;
        }
      }
    }
  }

  function deleteTask() {
    try {
      const target = { id: id, content: content, status: status };
      taskApi.deleteTask(target);
      deleteItem(target);
    } catch (error) {
      const res = error.response;
      if (res.status === 500) {
        history.push("/500");
      } else if (res.status === 504) {
        history.push("/504");
      } else {
        return;
      }
    }
  }
  return (
    <ListItem>
      <CheckBox onClick={changeStatus}>
        {status === "PENDING" ? "" : "v"}
      </CheckBox>
      {content}
      <DelBtn onClick={deleteTask}>X</DelBtn>
    </ListItem>
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
