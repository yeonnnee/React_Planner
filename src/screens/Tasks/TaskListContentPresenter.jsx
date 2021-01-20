import React from "react";

import { ListItem, CheckBox, DelBtn, Mark, Text } from "./styles";

const TaskListPresenter = (taskListProps) => {
  const { content, status, changeStatus, deleteTask } = taskListProps;

  return (
    <ListItem>
      <CheckBox onClick={changeStatus}>
        <Mark>{status === "PENDING" ? "" : "v"}</Mark>
      </CheckBox>
      <Text>{content}</Text>
      <DelBtn onClick={deleteTask}>X</DelBtn>
    </ListItem>
  );
};

export default TaskListPresenter;
