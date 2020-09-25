/* eslint-disable react/prop-types */
import React, { useState } from "react";
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
  margin: 10px 0;
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

const SelectedEvent = styled.ul`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 460px;
  height: 220px;
  overflow: hidden;
`;
const Scroll = styled.div`
  width: 480px;
  height: 200px;
  overflow: auto;
`;
const EventList = styled.ul`
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const List = styled.li`
  width: 80%;
  height: 70px;
  border: 1px solid #30475e;
`;

const MonthlyPresenter = () => {
  const [state, setState] = useState({ date: "" });

  // const day = new Date();
  // const today = day.toString().substring(0, 10);
  // const plansForToday = plans.filter((plan) => plan.date === today);

  const onClickDay = (event) => {
    const target = event.toString().substring(0, 10);
    setState({ date: target });
  };
  console.log(state);
  return (
    <Container>
      <MonthlyCalendar
        calendarType={"US"}
        onClickDay={onClickDay}
        locale="en-US"
      />

      <RecordLink to="/add" {...state}>
        <Button>ADD</Button>
      </RecordLink>
      <Line />

      <SelectedEvent>
        <List></List>
      </SelectedEvent>
      <Line />

      <Wrapper>
        <Scroll>
          <EventList>
            <List></List>
          </EventList>
        </Scroll>
      </Wrapper>
    </Container>
  );
};
export default MonthlyPresenter;
