import React, { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { connect } from "react-redux";

import { SELECT_MONTHLY, CHANGE_MONTHLY } from "../../redux/types";

const MonthlyCalendar = styled(ReactCalendar)`
  width: 100%;
  padding: 10px;
`;

const Calendar = (calendarProps) => {
  const { select, change } = calendarProps;
  const [state, setState] = useState(0);

  const onClickDay = (event) => {
    const target = event.toString().substring(0, 15);
    select(target);
  };
  function reload() {
    setState(state + 1);
  }
  async function getMonthYear() {
    const monthSection = await document.querySelector(
      ".react-calendar__navigation__label__labelText"
    );
    const monthYear = await monthSection.textContent;
    change(monthYear);
  }

  function init() {
    const nextBtn = document.querySelector(
      ".react-calendar__navigation__next-button"
    );
    const preBtn = document.querySelector(
      ".react-calendar__navigation__prev-button"
    );
    nextBtn.onclick = () => reload();
    preBtn.onclick = () => reload();
  }

  useEffect(() => {
    getMonthYear();
    init();
    return () => setState(0);
  }, [state]);

  return (
    <MonthlyCalendar
      calendarType={"US"}
      onClickDay={onClickDay}
      locale="en-US"
    />
  );
};

function mapStateToProps(state) {
  return { state: state.monthlyReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    select: (date) => {
      dispatch({ type: SELECT_MONTHLY, payload: date });
    },
    change: (monthYear) => {
      dispatch({ type: CHANGE_MONTHLY, payload: monthYear });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
