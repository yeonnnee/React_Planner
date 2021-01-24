import React from "react";

import { Question, Select, Option, Error } from "./styles";

const DeleteAccountReason = (reasonProps) => {
  const { onSelect, optionError } = reasonProps;

  return (
    <>
      <Question>계정을 삭제하시는 이유가 무엇인가요?</Question>
      <Select name="reason" onChange={onSelect}>
        <Option value="">계정삭제 사유 선택</Option>
        <Option value="디자인">디자인이 마음에 안들어서</Option>
        <Option value="기능">원하는 기능이 없어서</Option>
        <Option value="불편">사용하기 불편해서</Option>
      </Select>
      {optionError ? <Error>{optionError}</Error> : null}
    </>
  );
};

export default DeleteAccountReason;
