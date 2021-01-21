import React, { useEffect, useState } from "react";

import AddMonthlyInputPresenter from "./AddMonthlyInputPresenter";

const AddMonthlyInputContainer = (addMonthlyInputProps) => {
  const { planDate } = addMonthlyInputProps;
  const [time, setTime] = useState({ hour: [], min: [] });

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
  }, []);
  return <AddMonthlyInputPresenter planDate={planDate} time={time} />;
};

export default AddMonthlyInputContainer;
