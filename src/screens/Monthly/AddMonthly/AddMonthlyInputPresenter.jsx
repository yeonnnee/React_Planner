import React from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import AddMonthlyTime from "./AddMonthlyTime";
import {
  Container,
  TextColumn,
  TableName,
  Column,
  Date,
  Input,
  Form,
  AddBtn,
} from "./AddMonthly.styles";

const AddMonthlyInputPresenter = (addMonthlyInputProps) => {
  const {
    onChange,
    onSubmit,
    selectTime,
    text,
    error,
    planDate,
    time,
  } = addMonthlyInputProps;

  return (
    <Container>
      <TextColumn>
        <TableName>Date</TableName>
        <TableName>Description</TableName>
        <TableName>Time</TableName>
      </TextColumn>
      <Column>
        <Date>{planDate}</Date>
        <Form>
          <Input
            type="text"
            placeholder="내용을 입력해주세요..."
            onChange={onChange}
            value={text}
          />
        </Form>
        <AddMonthlyTime selectTime={selectTime} time={time} />
        <AddBtn icon={faPlusCircle} onClick={onSubmit} />
      </Column>
    </Container>
  );
};

export default AddMonthlyInputPresenter;
