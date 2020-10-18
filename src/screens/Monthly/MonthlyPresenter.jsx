import React from "react";

import MonthlyList from "./MonthlyList";
import Loader from "../../components/Loader";
import Calendar from "./Calendar";
import {
  Container,
  AddLink,
  AddSection,
  Wrapper,
  SelectedMonthly,
  Scroll,
  UnSelectedMonthly,
  Text,
} from "./styles";

const MonthlyPresenter = (monthlyProps) => {
  const { selected, unSelected, isLoading, onDelete, onEdit } = monthlyProps;

  return (
    <Container>
      <Calendar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {selected.length > 0 ? (
            selected.map((plan, index) => {
              return (
                <SelectedMonthly key={index}>
                  <MonthlyList {...plan} onDelete={onDelete} onEdit={onEdit} />
                </SelectedMonthly>
              );
            })
          ) : (
            <AddSection>
              <AddLink to="/add">ADD</AddLink>
            </AddSection>
          )}

          <Wrapper>
            <Scroll>
              <UnSelectedMonthly>
                {unSelected.length > 0 ? (
                  unSelected.map((plan, index) => {
                    return (
                      <MonthlyList
                        {...plan}
                        key={index}
                        onDelete={onDelete}
                        onEdit={onEdit}
                      />
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
