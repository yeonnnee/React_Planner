import React from "react";
import { faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";

import { TasksList, TaskListItem, Notice, TaskText } from "./styles";
import { CheckBox } from "../Tasks/styles";

const PreviewTasksList = (tasksProps) => {
  const { tasks } = tasksProps;

  return (
    <TasksList>
      {tasks.length > 0 ? (
        tasks.map((task, index) => {
          return (
            <TaskListItem key={index}>
              {task.status === "PENDING" ? (
                <CheckBox icon={faSquare} />
              ) : (
                <CheckBox icon={faCheckSquare} />
              )}
              <TaskText>{task.content}</TaskText>
            </TaskListItem>
          );
        })
      ) : (
        <Notice>등록된 업무가 없습니다</Notice>
      )}
    </TasksList>
  );
};

export default PreviewTasksList;
