import styled from "styled-components";

// Common
export const Section = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-rows: 80px 260px 200px;
  gap: 25px;
`;
export const Column = styled.div`
  border: 1px solid #9c9b9b;
  font-size: 15px;

  &:nth-child(3) {
    display: grid;
    place-items: center;
    border: none;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;
export const Tag = styled.div`
  width: 150px;
  height: 26px;
  display: grid;
  place-items: center;
  border: 1px solid #9c9b9b;
  background-color: white;
  transform: translateX(285px) translateY(-13px);
`;

export const Title = styled.div`
  width: 150px;
  height: 26px;
  display: grid;
  place-items: center;
  border: 1px solid #9c9b9b;
  background-color: white;
  transform: translateX(40px) translateY(-13px);
`;

export const Text = styled.div``;

// Challenges

export const ChallengesList = styled.ul`
  display: grid;
  place-items: center;
`;

export const ChallengeListItem = styled.li``;

// Schedule

export const ScheduleList = styled.ul`
  display: grid;
  place-items: center;
  width: 355px;
  height: 213px;
  border-left: 1px solid #9c9b9b;
  transform: translateY(-7px);
`;
export const ListItem = styled.li``;

export const Monthly = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

// Tasks

export const Notice = styled.div`
  transform: translateX(-7px) translateY(-7px);
`;
export const TasksList = styled.ul`
  width: 220px;
  height: 160px;
  margin-left: 10px;
  display: grid;
  place-items: center;
`;

export const Tasks = styled.div`
  border: 1px solid #9c9b9b;
  width: 240px;
  height: 200px;

  &:nth-child(2) {
    border: none;
    border-top: 1px solid #9c9b9b;
    transform: translateY(100px);
  }
`;
