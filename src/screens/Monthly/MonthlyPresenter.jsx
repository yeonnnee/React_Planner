import React from "react";

import Calendar from "../../components/Calendar";
import Header from "../../components/Header";
import { Container, Frame, Main } from "../../components/styles/Templates";

import {
  Section,
  AddLink,
  List,
  Title,
  AddSection,
  Wrapper,
  SelectedMonthly,
  Scroll,
  UnSelectedMonthly,
  Text,
  SubTitle,
  DetailLink,
} from "./styles";

const MonthlyPresenter = (monthlyProps) => {
  const { selected, unSelected, seeDetail } = monthlyProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Calendar />

          <Section>
            <SubTitle>Selected Plan</SubTitle>

            {selected.length > 0 ? (
              selected.map((plan, index) => {
                const date = new Date(plan.date.substring(0, 15));
                let month = date.getMonth() + 1;
                const year = date.getFullYear();
                let planDate = date.getDate();
                if (planDate < 10) {
                  planDate = "0" + planDate;
                }
                if (month < 10) {
                  month = "0" + month;
                }
                return (
                  <SelectedMonthly key={index}>
                    <DetailLink to={`monthly/${plan.id}`}>
                      <List id={plan.id} onClick={seeDetail}>
                        <Title id={plan.id}>
                          {month}-{planDate}-{year}
                        </Title>
                      </List>
                    </DetailLink>
                  </SelectedMonthly>
                );
              })
            ) : (
              <AddSection>
                <AddLink to="/monthly/add">ADD</AddLink>
              </AddSection>
            )}
            <SubTitle>Other Plans</SubTitle>
            <Wrapper>
              <Scroll>
                <UnSelectedMonthly>
                  {unSelected.length > 0 ? (
                    unSelected.map((plan, index) => {
                      const date = new Date(plan.date.substring(0, 15));
                      let month = date.getMonth() + 1;
                      const year = date.getFullYear();
                      let planDate = date.getDate();
                      if (planDate < 10) {
                        planDate = "0" + planDate;
                      }
                      if (month < 10) {
                        month = "0" + month;
                      }
                      return (
                        <DetailLink to={`monthly/${plan.id}`} key={index}>
                          <List id={plan.id} onClick={seeDetail}>
                            <Title id={plan.id}>
                              {month}-{planDate}-{year}
                            </Title>
                          </List>
                        </DetailLink>
                      );
                    })
                  ) : (
                    <Text>Empty</Text>
                  )}
                </UnSelectedMonthly>
              </Scroll>
            </Wrapper>
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};
export default MonthlyPresenter;
