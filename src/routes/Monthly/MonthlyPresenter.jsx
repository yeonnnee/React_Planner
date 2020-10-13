import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MonthlyList from "./MonthlyList";
import Loader from "../../components/Loader";
import Calendar from "./Calendar";

const Container = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #30475e;
  width: 80px;
  height: 30px;
  border: 1px solid #30475e;
  font-family: "Rajdhani", sans-serif;
  &:hover {
    background-color: #30475e;
    color: #c2b0ad;
  }
`;

const SelectedMonthly = styled.ul`
  width: 90%;
  height: 100px;
  border-top: 1px solid #30475e;
  border-bottom: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 460px;
  height: 240px;
  overflow: hidden;
`;
const Scroll = styled.div`
  width: 480px;
  height: 230px;
  overflow: auto;
`;
const UnSelectedMonthly = styled.ul`
  height: 250px;
  padding: 20px;
  display: grid;
  gap: 5px;
`;
const Text = styled.div`
  font-family: "Life Savers", cursive;
  display: flex;
  justify-content: center;
`;

const MonthlyPresenter = (monthlyProps) => {
  const { selected, unSelected, isLoading, onDelete, onEdit } = monthlyProps;

  return (
    <Container>
      <Calendar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SelectedMonthly>
            {selected.length > 0 ? (
              selected.map((plan, index) => {
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
              <AddLink to="/add">ADD</AddLink>
            )}
          </SelectedMonthly>
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
