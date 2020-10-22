import React, { useEffect, useState, useCallback } from "react";
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
  const { select, change, state } = calendarProps;
  const [clicked, setClicked] = useState(0);

  const onClickDay = (event) => {
    const target = event.toString().substring(0, 15);
    select(target);
  };

  const init = useCallback(() => {
    const nextMonth = document.querySelector(
      ".react-calendar__navigation__next-button"
    );
    const nextYear = document.querySelector(
      ".react-calendar__navigation__next2-button"
    );
    const preYear = document.querySelector(
      ".react-calendar__navigation__prev2-button"
    );
    const preMonth = document.querySelector(
      ".react-calendar__navigation__prev-button"
    );
    nextMonth.onclick = () => setClicked(clicked + 1);
    nextYear.onclick = () => setClicked(clicked + 1);
    preMonth.onclick = () => setClicked(clicked + 1);
    preYear.onclick = () => setClicked(clicked + 1);
  }, [clicked]);

  const onStatus = useCallback(async () => {
    const monthYear = state.monthYear.split(" ");
    const year = monthYear[1];
    const month = monthYear[0];

    const plans = state.plans.filter((plan) => {
      const planDate = plan.date.split(" ");
      return planDate[1] === month.substring(0, 3) && planDate[3] === year;
    });
    const targets = plans.map((plan) => plan.date.split(" ")[2]);

    for (let i = 0; i < targets.length; i++) {
      const date = targets[i];
      const abbr = await document.querySelector(
        `[aria-label= "${month} ${date}, ${year}" ]`
      );
      abbr.style.padding = "7px";
      abbr.style.borderRadius = "20px";
      abbr.style.backgroundColor = "#AD8D92";
    }
  }, [state.monthYear, state.plans]);

  const getMonthYear = useCallback(async () => {
    const monthSection = await document.querySelector(
      ".react-calendar__navigation__label__labelText"
    );
    const monthYear = await monthSection.textContent;
    change(monthYear);
  }, [change]);

  useEffect(() => {
    getMonthYear();
    onStatus();
    init();
  }, [getMonthYear, init, onStatus]);

  return (
    <MonthlyCalendar
      calendarType={"US"}
      onClickDay={onClickDay}
      onClickMonth={init}
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
