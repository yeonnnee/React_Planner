import React from "react";
import styled from "styled-components";

export const Text = styled.div``;
export const Content = styled.div`
  width: 220px;
  height: 160px;
  margin-left: 10px;
  display: grid;
  place-items: center;
`;

export const Notice = styled.div`
  transform: translateX(-7px) translateY(-7px);
`;
export const List = styled.ul`
  display: grid;
  place-items: center;
`;
export const ListItem = styled.li``;

const TasksList = (tasksProps) => {
  const { tasks } = tasksProps;
  return (
    <>
      {tasks.length > 0 ? (
        <List>
          {tasks.map((task, index) => {
            return <ListItem key={index}>{task.content}</ListItem>;
          })}
        </List>
      ) : (
        <Content>
          <Notice>할 일이 없습니다</Notice>
        </Content>
      )}
    </>
  );
};

export default TasksList;
