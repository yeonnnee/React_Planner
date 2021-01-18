import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { connect } from "react-redux";

import { SELECT_MONTHLY, CHANGE_MONTHLY } from "../../../redux/types";

const MonthlyCalendar = styled(ReactCalendar)`
  width: 100%;
  padding: 10px 15px 10px 10px;
  position: relative;
  top: -30px;
`;
const Mark = styled.div`
  width: 6px;
  height: 6px;
  background-color: #856969;
  border-radius: 5px;
  transform: translateX(25px);
`;

const Calendar = (calendarProps) => {
  const { select, state, change } = calendarProps;

  const onClickDay = (event) => {
    const target = event.toString().substring(0, 15);
    select(target);
  };

  /* 
    Function called when the user navigates from one view to another 
    using previous/next button.
  */
  const changeMonth = (monthInfo) => {
    const activeStartDate = monthInfo.activeStartDate
      .toString()
      .substring(0, 15);
    const activeMonth = activeStartDate.split(" ")[1];
    const activeYear = activeStartDate.split(" ")[3];

    change(activeMonth, activeYear);
  };

  const markDate = (tileContentInfo) => {
    const date = tileContentInfo.date.toString().substring(0, 15);

    return state.plans.map((plan, index) =>
      plan.date === date ? <Mark key={index} /> : null
    );
  };

  return (
    <MonthlyCalendar
      calendarType="US"
      locale="en-US"
      onClickDay={onClickDay}
      tileContent={markDate}
      onActiveStartDateChange={changeMonth}
      tileClassName={({ date, view }) =>
        view === "month" && date.getDay() === 3 ? "wednesday" : null
      }
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
    change: (activeMonth, activeYear) => {
      dispatch({
        type: CHANGE_MONTHLY,
        payload: { month: activeMonth, year: activeYear },
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
