import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { taskApi } from "../../api";
import TasksPresenter from "./TasksPresenter";
import Loader from "../../components/Loader";
import ServerError from "../../components/msg/ServerError";
import GatewayError from "../../components/msg/GatewayError";
import {
  FETCH_SUCCESS,
  FETCH_START,
  ADD_TASKS,
  TASKS_ERROR,
} from "../../redux/types";

const Tasks = (tasksProps) => {
  const { state, start, success, add, setError } = tasksProps;
  const [tasks, setTasks] = useState({
    content: "",
    id: "",
    status: "",
    error: "",
  });

  const fetchData = useCallback(async () => {
    start();
    try {
      const res = await taskApi.getTasks();
      success(res.data.tasks);
    } catch (error) {
      const status = error.response.status;
      if (status === 500) {
        setError("500");
      } else if (status === 504) {
        setError("504");
      } else {
        return;
      }
    }
  }, [start, success, setError]);

  function onChange(event) {
    const value = event.target.value;
    if (value.length > 20) {
      setTasks({
        content: value,
        id: uuidv4().toString(),
        status: "PENDING",
        error: "입력 가능한 글자수를 초과하였습니다 (20자 내외)",
      });
    } else {
      setTasks({
        content: value,
        id: uuidv4().toString(),
        status: "PENDING",
        error: "",
      });
    }
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      if (tasks.content && !tasks.error) {
        await taskApi.postTask(tasks);
        add(tasks);
        setTasks({ content: "", id: "", status: "", error: "" });
      }
    } catch (error) {
      const res = error.response;
      if (res.status === 504) {
        setError("504");
      } else if (res.status === 500) {
        setError("500");
      } else {
        return;
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {state.isLoading ? (
        <Loader />
      ) : state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <TasksPresenter
          state={state}
          tasks={tasks}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.tasksReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    start: () => {
      dispatch({ type: FETCH_START });
    },
    success: (data) => {
      dispatch({ type: FETCH_SUCCESS, payload: data });
    },

    add: (tasks) => {
      dispatch({
        type: ADD_TASKS,
        payload: tasks,
      });
    },
    setError: (error) => {
      dispatch({ type: TASKS_ERROR, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
