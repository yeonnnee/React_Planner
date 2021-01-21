import React from "react";

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  TextColumn,
  Label,
  Column,
  Date,
  Input,
  Form,
  AddBtn,
} from "./AddMonthly.styles";
import AddMonthlyTime from "./AddMonthlyTime";

const AddMonthlyInputPresenter = (addMonthlyInputProps) => {
  const { selectTime, planDate, time } = addMonthlyInputProps;

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

        <AddMonthlyTime selectTime={selectTime} time={time} />
        <AddBtn icon={faPlusCircle} />
      </Column>
    </Container>
  );
};

export default AddMonthlyInputPresenter;
