import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MonthlyList from "./MonthlyList";

const Container = styled.div`
  position: relative;
  top: -50px;
  width: 100%;
  display: flex;
  flex-direction: column;
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

const SelectedMonthly = styled.ul`
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
const UnSelectedMonthly = styled.ul`
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div``;

const MonthlyPresenter = (monthlyProps) => {
  const { plans } = monthlyProps;
  const [selectedMonthly, setSelectedMonthly] = useState();
  const [unSelectedMonthly, setUnSelectedMonthly] = useState();

  const onClickDay = (event) => {
    const target = event.toString().substring(0, 10);
    const selected_Plan = plans.filter((plan) => {
      return plan.date === target;
    });
    const unSelected_Plan = plans.filter((plan) => {
      return plan.date !== target;
    });
    setSelectedMonthly(selected_Plan);
    setUnSelectedMonthly(unSelected_Plan);
  };
  return (
    <Container>
      <MonthlyCalendar
        calendarType={"US"}
        onClickDay={onClickDay}
        locale="en-US"
      />

      <RecordLink to="/monthly/add"></RecordLink>
      <Line />

      <SelectedMonthly>
        {selectedMonthly ? (
          <MonthlyList {...selectedMonthly} />
        ) : (
          <Button>ADD</Button>
        )}
      </SelectedMonthly>
      <Line />

      <Wrapper>
        <Scroll>
          <UnSelectedMonthly>
            {unSelectedMonthly ? (
              <MonthlyList {...unSelectedMonthly} />
            ) : (
              <Text>Empty</Text>
            )}
          </UnSelectedMonthly>
        </Scroll>
      </Wrapper>
    </Container>
  );
};
export default MonthlyPresenter;
