import React from "react";
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";

import { ListItem, CheckBox, DelBtn, Text } from "./styles";

const TaskListPresenter = (taskListProps) => {
  const { content, status, changeStatus, deleteTask } = taskListProps;

  return (
    <ListItem>
      {status === "PENDING" ? (
        <CheckBox onClick={changeStatus} icon={faSquare} />
      ) : (
        <CheckBox onClick={changeStatus} icon={faCheckSquare} />
      )}

      <Text>{content}</Text>
      <DelBtn onClick={deleteTask}>X</DelBtn>
    </ListItem>
  );
};

export default TaskListPresenter;
