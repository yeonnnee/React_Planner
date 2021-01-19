import React from "react";

import { List, ListItem, Notice } from "./styles";

const TasksList = (tasksProps) => {
  const { tasks } = tasksProps;
  return (
    <List>
      {tasks.length > 0 ? (
        tasks.map((task, index) => {
          return <ListItem key={index}>{task.content}</ListItem>;
        })
      ) : (
        <Notice>등록된 업무가 없습니다</Notice>
      )}
    </List>
  );
};

export default TasksList;
