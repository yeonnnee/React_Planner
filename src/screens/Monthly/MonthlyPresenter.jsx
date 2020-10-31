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
    <>
      <Calendar />
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <SubTitle>Selected Plan</SubTitle>

          {selected.length > 0 ? (
            selected.map((plan, index) => {
              const date = new Date(plan.date.substring(0, 15));
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              const planDate = date.getDate();
              if (month < 10) {
                return "0" + month;
              }
              if (planDate < 10) {
                return "0" + planDate;
              }
              return (
                <SelectedMonthly key={index}>
                  <DetailLink to={`monthly/${plan.id}`}>
                    <List tabIndex="0" id={plan.id} onClick={seeDetail}>
                      <Title>
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
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    const planDate = date.getDate();
                    if (month < 10) {
                      return "0" + month;
                    }
                    if (planDate < 10) {
                      return "0" + planDate;
                    }
                    return (
                      <DetailLink to={`monthly/${plan.id}`} key={index}>
                        <List tabIndex="0" id={plan.id} onClick={seeDetail}>
                          <Title>
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
        </Container>
      )}
    </>
  );
};
export default MonthlyPresenter;
