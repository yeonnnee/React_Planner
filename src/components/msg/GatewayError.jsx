import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  font-family: "Piazzolla", serif;
`;
const GatewayError = () => {
  return (
    <Container>
      <Text>504 Gateway Time-out</Text>
    </Container>
  );
};

export default GatewayError;
