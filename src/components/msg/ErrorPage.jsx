import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 35px;
  @media only screen and (max-width: 640px) {
    font-size: 28px;
  }
`;
const Status = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
`;
const Text = styled.div`
  margin-top: 20px;
  @media only screen and (max-width: 640px) {
    width: 330px;
    font-size: 13px;
  }
`;

const ErrorPage = () => {
  return (
    <Container>
      <Status>ERROR</Status>
      <Title>Something Went Wrong</Title>
      <Text>문제가 발생하였습니다. 잠시 후 다시 시도해 주십시오</Text>
    </Container>
  );
};

export default ErrorPage;
