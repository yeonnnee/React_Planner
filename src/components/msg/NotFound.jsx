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
`;
const Status = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
`;
const Text = styled.div`
  margin-top: 20px;
`;

const NotFound = () => {
  return (
    <Container>
      <Status>404 ERROR</Status>
      <Title>Page Not Found</Title>
      <Text>요청한 페이지를 찾을 수 없습니다</Text>
    </Container>
  );
};

export default NotFound;
