import React from "react";
import { connect } from "react-redux";

import TaskListContentPresenter from "./TaskListContentPresenter";
import { taskApi } from "../../api";
import { CHANGE_STATUS, DELETE_TASKS } from "../../redux/actions/tasksActions";

const TaskListContentContainer = (taskListProps) => {
  const { task, change, deleteItem, history } = taskListProps;

  async function changeStatus() {
    if (task.status === "PENDING") {
      try {
        const completed = {
          id: task.id,
          content: task.content,
          status: "FINISHED",
        };
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
    if (task.status === "FINISHED") {
      try {
        const uncompleted = {
          id: task.id,
          content: task.content,
          status: "PENDING",
        };
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
      const target = {
        id: task.id,
        content: task.content,
        status: task.status,
      };
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
    <TaskListContentPresenter
      {...task}
      deleteTask={deleteTask}
      changeStatus={changeStatus}
    />
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

export default connect(null, mapDispatchToProps)(TaskListContentContainer);
