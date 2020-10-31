import React from "react";

import Loader from "../../components/Loader";
import Calendar from "./Calendar";
import {
  Container,
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
  const { selected, unSelected, isLoading, seeDetail } = monthlyProps;

  return (
    <Container>
      <Calendar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SubTitle>Selected Plan</SubTitle>

          {selected.length > 0 ? (
            selected.map((plan, index) => {
              return (
                <SelectedMonthly key={index}>
                  <DetailLink to={`monthly/${plan.id}`}>
                    <List tabIndex="0" id={plan.id} onClick={seeDetail}>
                      <Title>{plan.date.substring(0, 10)}</Title>
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
                    return (
                      <DetailLink to={`monthly/${plan.id}`} key={index}>
                        <List tabIndex="0" id={plan.id} onClick={seeDetail}>
                          <Title>{plan.date.substring(0, 10)}</Title>
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
        </>
      )}
    </Container>
  );
};
export default MonthlyPresenter;
