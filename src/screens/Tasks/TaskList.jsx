import React from "react";

import TaskListContent from "./TaskListContentContainer";
import { Wrapper, Scroll, List } from "./styles";

const TaskList = (taskListProps) => {
  const { tasks } = taskListProps;

  return (
    <Wrapper>
      <Scroll>
        <List>
          {tasks.map((task, index) => {
            return <TaskListContent task={task} key={index} />;
          })}
        </List>
      </Scroll>
    </Wrapper>
  );
};

export default TaskList;
