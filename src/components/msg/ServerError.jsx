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

const Status = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
`;
const Title = styled.div`
  font-size: 35px;
`;
const Text = styled.div`
  font-size: 15px;
  margin-top: 20px;
  width: 450px;
  line-height: 1.5;
`;

const ServerError = () => {
  return (
    <Container>
      <Status>500 ERROR</Status>
      <Title>INTERNAL SERVER ERROR</Title>
      <Text>
        Some error occurred. The error has been traced and we will try to get a
        fix out as soon as possible. sorry for the inconvenience.
      </Text>
    </Container>
  );
};

export default ServerError;
