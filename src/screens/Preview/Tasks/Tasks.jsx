import React from "react";

import { Column, Title, Tasks } from "../styles";
import TasksList from "./TasksList";

const TasksSection = (tasksProps) => {
  const { pendingList, finishedList } = tasksProps;
  return (
    <Column>
      <Tasks>
        <Title>Pending</Title>
        <TasksList tasks={pendingList} />
      </Tasks>

      <Tasks>
        <Title>Today&apos;s Tasks</Title>
      </Tasks>

      <Tasks>
        <Title>Finished</Title>
        <TasksList tasks={finishedList} />
      </Tasks>
    </Column>
  );
};

export default TasksSection;
