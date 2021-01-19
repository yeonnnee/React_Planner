import React from "react";

import { TasksList, ListItem, Notice } from "./styles";

const PreviewTasksList = (tasksProps) => {
  const { tasks } = tasksProps;
  return (
    <TasksList>
      {tasks.length > 0 ? (
        tasks.map((task, index) => {
          return <ListItem key={index}>{task.content}</ListItem>;
        })
      ) : (
        <Notice>등록된 업무가 없습니다</Notice>
      )}
    </TasksList>
  );
};

export default PreviewTasksList;
