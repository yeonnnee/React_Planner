import React from "react";

import { Container, DateText } from "./styles";

const PreviewScheduleDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const date = today.getDate();
  const month = today.toLocaleString("En", { month: "long" });
  const weekday = today.toLocaleString("En", { weekday: "long" });

  return (
    <Container>
      <DateText>{year}</DateText>
      <DateText>{month}</DateText>
      <DateText>{date}</DateText>
      <DateText>{weekday}</DateText>
    </Container>
  );
};

export default PreviewScheduleDate;
