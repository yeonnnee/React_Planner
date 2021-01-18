import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const Calendar = styled(ReactCalendar)`
  width: 100%;
  transform: translateY(-10px);
  background-color: #f1eeee;
  opacity: 0.7;
  border-radius: 20px;
`;

const PreviewCalendar = () => {
  return (
    <Calendar
      calendarType="US"
      locale="en-US"
      showNavigation={false}
      tileClassName={({ date, view }) =>
        view === "month" && date.getDay() === 3 ? "wednesday" : null
      }
    />
  );
};

export default PreviewCalendar;
