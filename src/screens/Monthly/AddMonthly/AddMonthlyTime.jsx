import React from "react";

import { TimeSection, TimeSelect, Option, TimeMark } from "./AddMonthly.styles";

const AddMonthlyTime = (timeProps) => {
  const { selectTime, time } = timeProps;
  return (
    <TimeSection>
      <TimeSelect name="hour" onChange={selectTime}>
        {time.hour.map((h, index) => (
          <Option value={h} key={index}>
            {h}
          </Option>
        ))}
      </TimeSelect>
      <TimeMark>:</TimeMark>
      <TimeSelect name="min" onChange={selectTime}>
        {time.min.map((m, index) => (
          <Option value={m} key={index}>
            {m}
          </Option>
        ))}
      </TimeSelect>
    </TimeSection>
  );
};

export default AddMonthlyTime;
