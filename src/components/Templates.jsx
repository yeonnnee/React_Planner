import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  height: 100%;
  background-color: #273c75;
  box-shadow: 5px 5px 15px #615a58, 5px 5px 10px #615a58;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Side = styled.div`
  width: 100%;
  height: 150px;
  padding: 20px;
  background-color: #ac6e6c;
`;
const Text = styled.div`
  width: 100%;
  height: 850px;
  transform: translateY(-380px);
  background-color: white;
`;

const Template = () => {
  return (
    <Container>
      <Side>
        <Text></Text>
      </Side>
    </Container>
  );
};

export default Template;
