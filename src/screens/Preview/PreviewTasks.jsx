import React from "react";

import { Column, Title, Tasks, More } from "./styles";
import TasksList from "./PreviewTasksList";

const PreviewTasks = (tasksProps) => {
  const { pendingList, finishedList } = tasksProps;
  return (
    <Column>
      <Tasks>
        <Title>Pending</Title>
        <TasksList tasks={pendingList} />
        <More to="/tasks">더보기</More>
      </Tasks>

      <Tasks>
        <Title>Today&apos;s Tasks</Title>
      </Tasks>

      <Tasks>
        <Title>Finished</Title>
        <TasksList tasks={finishedList} />
        <More to="/tasks">더보기</More>
      </Tasks>
    </Column>
  );
};

export default PreviewTasks;
