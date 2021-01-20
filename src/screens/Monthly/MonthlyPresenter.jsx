import React from "react";

import Calendar from "../../components/Calendar";
import Header from "../../components/Header";
import { Container, Frame, Main } from "../../components/styles/Templates";
import MonthlyContent from "./MonthlyContent";

import {
  Section,
  AddLink,
  AddSection,
  Notice,
  Column,
  EditLink,
} from "./styles";

const MonthlyPresenter = (monthlyProps) => {
  const { selected } = monthlyProps;
  console.log("monthlyPresenter", selected);
  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
            <Calendar />
            <Column>
              {selected[0].contents?.length > 0 ? (
                <EditLink to={`/monthly/edit/${selected[0].id}`}>
                  수정하기
                </EditLink>
              ) : null}
            </Column>
            {selected[0].contents?.length > 0 ? (
              <MonthlyContent contents={selected[0].contents} />
            ) : (
              <AddSection>
                <Notice>일정이 없습니다</Notice>
                <AddLink to="/monthly/add">ADD</AddLink>
              </AddSection>
            )}
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};
export default MonthlyPresenter;
