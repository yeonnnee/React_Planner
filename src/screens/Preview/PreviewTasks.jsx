import React from "react";

import { Column, Title, Tasks } from "./styles";
import TasksList from "./PreviewTasksList";

const PreviewTasks = (tasksProps) => {
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

export default PreviewTasks;
