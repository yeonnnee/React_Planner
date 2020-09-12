/* eslint-disable react/prop-types */
import React from "react";
import TaskList from "../components/TaskList";
import TasksInput from "../components/TasksInput";

const TasksPresenter = (state) => {
  return (
    <div>
      <h1>TASKS</h1>
      <TasksInput />
      <ul>
        <h3>PENDING</h3>
        {state.pendingList.map((task, index) => {
          return <TaskList {...task} key={index} />;
        })}
        <h3>FINISHED</h3>
        {state.finishedList.map((task, index) => {
          return <TaskList {...task} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default TasksPresenter;
