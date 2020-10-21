import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { taskApi } from "../../api";
import TasksPresenter from "./TasksPresenter";
import Loader from "../../components/Loader";
import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  FETCH_START,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_FAILED,
} from "../../redux/types";

const Tasks = (tasksProps) => {
  const { state, start, success, add, failed, setError, history } = tasksProps;
  const [tasks, setTasks] = useState({ content: "", id: "", status: "" });

  const fetchData = useCallback(async () => {
    start();
    try {
      const res = await taskApi.getTasks();
      success(res.data.tasks);
    } catch (error) {
      const status = error.response.status;
      if (status === 500) {
        failed();
        history.push("/500");
      } else if (status === 504) {
        failed();
        history.push("/504");
      } else {
        return failed();
      }
    }
  }, [start, success, failed, history]);

  function onChange(event) {
    const value = event.target.value;
    setTasks({ content: value, id: uuidv4().toString(), status: "PENDING" });
    setError("");
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      if (tasks.content) {
        await taskApi.postTask(tasks);
        add(tasks);
        setTasks({ content: "", id: "", status: "" });
      }
    } catch (error) {
      const res = error.response;
      if (res.status === 400) {
        setError(res.data.msg);
      } else if (res.status === 504) {
        history.push(504);
      } else if (res.status === 500) {
        history.push(500);
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
      ) : (
        <TasksPresenter
          {...state}
          {...tasks}
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
    failed: () => {
      dispatch({ type: FETCH_FAILED });
    },
    add: (tasks) => {
      dispatch({
        type: ADD_TASKS_SUCCESS,
        payload: tasks,
      });
    },
    setError: (error) => {
      dispatch({ type: ADD_TASKS_FAILED, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
