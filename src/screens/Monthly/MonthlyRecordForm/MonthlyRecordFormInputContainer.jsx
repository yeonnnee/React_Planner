import React, { useEffect, useState, useCallback } from "react";

import MonthlyRecordFormInputPresenter from "./MonthlyRecordFormInputPresenter";

const MonthlyRecordFormInputContainer = (addMonthlyInputProps) => {
  const {
    onChange,
    onSubmit,
    selectTime,
    text,
    error,
    selectedDate,
  } = addMonthlyInputProps;

  const [planDate, setPlanDate] = useState("");
  const [time, setTime] = useState({ hour: [], min: [] });

  const changeDateFormat = useCallback(() => {
    const date = new Date(selectedDate);

    const planYear = date.getFullYear();
    let planDate = date.getDate();
    let planMonth = date.getMonth() + 1;

    if (planDate < 10) {
      planDate = "0" + planDate;
    }
    if (planMonth < 10) {
      planMonth = "0" + planMonth;
    }

    setPlanDate(`${planYear}-${planMonth}-${planDate}`);
  }, [selectedDate]);

  function createTimeSelect() {
    let hour = [];
    let min = [];
    for (let i = 0; i < 25; i++) {
      if (i < 10) {
        const result = "0" + i;
        hour.push(result);
      } else {
        hour.push(i);
      }
    }

    for (let i = 0; i < 60; i++) {
      if (i < 10) {
        const result = "0" + i;
        min.push(result);
      } else {
        min.push(i);
      }
    }
    setTime({ hour: hour, min: min });
  }

  useEffect(() => {
    createTimeSelect();
    changeDateFormat();
  }, [changeDateFormat]);

  return (
    <MonthlyRecordFormInputPresenter
      onChange={onChange}
      onSubmit={onSubmit}
      selectTime={selectTime}
      text={text}
      error={error}
      planDate={planDate}
      time={time}
    />
  );
};

export default MonthlyRecordFormInputContainer;
