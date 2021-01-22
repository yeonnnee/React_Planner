import React from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import MonthlyRecordTimeOption from "./MonthlyRecordFormTimeOption";
import {
  Container,
  TextColumn,
  TableName,
  Column,
  Date,
  Input,
  Form,
  AddBtn,
} from "./styles";

const MonthlyRecordInpuPresenter = (addMonthlyInputProps) => {
  const {
    onChange,
    onSubmit,
    selectTime,
    text,
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
        <MonthlyRecordTimeOption selectTime={selectTime} time={time} />
        <AddBtn icon={faPlusCircle} onClick={onSubmit} />
      </Column>
    </Container>
  );
};

export default MonthlyRecordInpuPresenter;
