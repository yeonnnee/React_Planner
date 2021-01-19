import React from "react";
import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  place-items: center;
`;
export const ListItem = styled.li``;
export const Text = styled.div``;

const ScheduleList = (schedulProps) => {
  const { schedule } = schedulProps;

  return (
    <List>
      {schedule.length > 0 ? (
        schedule.contents.map((content, index) => {
          return <ListItem key={index}>{content.text}</ListItem>;
        })
      ) : (
        <Text>등록된 일정이 없습니다</Text>
      )}
    </List>
  );
};
export default ScheduleList;
