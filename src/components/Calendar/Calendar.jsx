import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { connect } from "react-redux";

import { SELECT_MONTHLY } from "../../redux/actions/monthlyActions";

const MonthlyCalendar = styled(ReactCalendar)`
  width: 100%;
  opacity: 0.7;
  height: 320px;
`;
const Mark = styled.div`
  width: 6px;
  height: 6px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  transform: translateX(37px);
`;

const Calendar = (calendarProps) => {
  const { select, state } = calendarProps;

  const onClickDay = (event) => {
    const target = event.toString().substring(0, 15);
    select(target);
  };

  const markDate = (tileContentInfo) => {
    const tile = tileContentInfo.date.toString().substring(0, 15);
    const today = new Date().toString().substring(0, 15);

    return state.plans.map((plan, index) =>
      tile.includes(plan.date) &&
      !tile.includes(state.selectedDate) &&
      tile !== today ? (
        <Mark key={index} color="#856969" />
      ) : null
    );
  };

  return (
    <MonthlyCalendar
      calendarType="US"
      locale="en-US"
      onClickDay={onClickDay}
      tileContent={markDate}
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
