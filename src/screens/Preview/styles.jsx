import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const More = styled(Link)`
  font-size: 13px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  color: #551616;
  text-decoration: none;

  &:nth-child(3) {
    transform: translateY(15px);
  }
`;

// Challenges

export const ChallengeSection = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 20px;
  padding: 0 8px;
`;
export const ChallengesList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

export const ChallengeListItem = styled.li`
  &::first-letter {
    font-style: italic;
    font-family: "Old Standard TT", serif;
    font-weight: bold;
  }
`;

// Schedule

export const Monthly = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

export const ScheduleSection = styled.div`
  display: grid;
  grid-template-columns: 340px;
  grid-template-rows: 30px 150px;
  width: 355px;
  height: 213px;
  border-left: 1px solid #9c9b9b;
  padding: 10px;
`;

export const SubTitle = styled.div`
  width: 100%;
  height: 20px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  opacity: 0.7;
  font-size: 14px;
  transform: translateY(-12px);
`;

export const ScheduleList = styled.ul`
  display: grid;
  grid-template-columns: 340px;
  grid-auto-rows: 30px;
  overflow: hidden;
  place-items: center;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 287px 52px;
  grid-template-rows: 30px;
`;

export const Text = styled.div``;

// schedule date

export const Container = styled.div`
  width: 320px;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 30px 100px 30px;
  place-items: center;
  background-color: #1f1f1f;
`;

export const DateText = styled.div`
  font-family: "Nanum Gothic Coding", monospace;
  color: white;

  &:nth-child(1) {
    font-family: "Rajdhani", sans-serif;
    opacity: 0.9;
  }
  &:nth-child(2) {
    font-size: 14px;
    opacity: 0.9;
    letter-spacing: 1.5px;
    transform: translateY(-9px);
  }
  &:nth-child(3) {
    color: #d0a67b;
    font-size: 40px;
    font-family: "Old Standard TT", serif;
    transform: translateY(-10px);
  }
  &:nth-child(4) {
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1.5px;
    transform: translateY(-15px);
  }
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
