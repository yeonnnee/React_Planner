import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MonthlyCalendar = styled(Calendar)`
  width: 100%;
  padding: 10px;
`;

const Line = styled.div`
  width: 90%;
  margin-top: 20px;
  height: 5px;
  border-bottom: 1px solid #30475e;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  margin: 5px 23px;
  outline: none;
  border: 1px solid #30475e;
  background: none;
  cursor: pointer;
  font-family: "Life Savers", cursive;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

const RecordLink = styled(Link)`
  text-decoration: none;
  align-self: flex-end;
`;
const MonthlyPresenter = () => {
  const onClickDay = (event) => {
    const target = event.toString().substring(0, 15);
    console.log(target);
  };
  return (
    <Container>
      <MonthlyCalendar
        calendarType={"US"}
        onClickDay={onClickDay}
        locale="en-US"
      />
      <Line />
      <RecordLink to="/monthly">
        <Button>ADD</Button>
      </RecordLink>
    </Container>
  );
};
export default MonthlyPresenter;
