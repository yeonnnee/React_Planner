import React from "react";

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import {
  TimeSection,
  TimeSelect,
  Option,
  Container,
  TextColumn,
  Label,
  Column,
  Date,
  Input,
  Form,
  TimeMark,
  AddBtn,
} from "./AddMonthly.styles";

const AddMonthlyInputPresenter = (addMonthlyInputProps) => {
  const { selectTime, planDate } = addMonthlyInputProps;

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

  return (
    <Container>
      <TextColumn>
        <Label>Date</Label>
        <Label>Description</Label>
        <Label>Time</Label>
      </TextColumn>
      <Column>
        <Date>{planDate}</Date>
        <Form>
          <Input type="text" placeholder="내용을 입력해주세요..." />
        </Form>

        <TimeSection>
          <TimeSelect name="hour" onChange={selectTime}>
            {hour.map((h, index) => (
              <Option value={h} key={index}>
                {h}
              </Option>
            ))}
          </TimeSelect>
          <TimeMark>:</TimeMark>
          <TimeSelect name="min" onChange={selectTime}>
            {min.map((m, index) => (
              <Option value={m} key={index}>
                {m}
              </Option>
            ))}
          </TimeSelect>
        </TimeSection>
        <AddBtn icon={faPlusCircle} />
      </Column>
    </Container>
  );
};

export default AddMonthlyInputPresenter;
