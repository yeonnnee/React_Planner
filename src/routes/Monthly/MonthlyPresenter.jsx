import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MonthlyList from "./MonthlyList";
import Loader from "../../components/Loader";

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

const AddLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #30475e;
  width: 80px;
  height: 30px;
  border: 1px solid #30475e;
  font-family: "Life Savers", cursive;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

const SelectedMonthly = styled.ul`
  width: 90%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #30475e;
  border-bottom: 1px solid #30475e;
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  font-family: "Life Savers", cursive;
`;

const MonthlyPresenter = (monthlyProps) => {
  const { plans, isLoading } = monthlyProps;
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

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SelectedMonthly>
            {selectedMonthly ? (
              <MonthlyList {...selectedMonthly} />
            ) : (
              <AddLink to="/monthly/add">ADD</AddLink>
            )}
          </SelectedMonthly>

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
        </>
      )}
    </Container>
  );
};
export default MonthlyPresenter;
