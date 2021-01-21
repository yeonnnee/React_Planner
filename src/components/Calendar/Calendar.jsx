import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { connect } from "react-redux";

import { SELECT_MONTHLY } from "../../redux/actions/monthlyActions";

const MonthlyCalendar = styled(ReactCalendar)`
  width: 100%;
  opacity: 0.7;
  height: 340px;
`;
const Mark = styled.div`
  width: 6px;
  height: 6px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  transform: translateX(40px);
`;

const Calendar = (calendarProps) => {
  const { select, state } = calendarProps;

  const onClickDay = (event) => {
    const target = event.toString().substring(0, 15);
    select(target);
  };

  const markDate = (tileContentInfo) => {
    const date = tileContentInfo.date.toString().substring(0, 15);
    const today = new Date().toString().substring(0, 15);

    return state.plans.map((plan, index) =>
      plan.date === date && state.selectedDate !== date && date !== today ? (
        <Mark key={index} color="#856969" />
      ) : (
        <Mark key={index} color="transparent" />
      )
    );
  };

  return (
    <MonthlyCalendar
      calendarType="US"
      locale="en-US"
      onClickDay={onClickDay}
      tileContent={markDate}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
