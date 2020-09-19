import React from "react";
import styled, { keyframes } from "styled-components";

const Blink = keyframes`
    0%{
      opacity: 1;  
    }
    20%{
        opacity: 0.8;
    }
    40%{
        opacity: 0.6;
    }
    60%{
        opacity: 0.4;
    }
    100%{
        opacity: 0;
    }
`;

const Container = styled.div`
  width: 100%;
  font-size: 15px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.h1`
  font-family: "Life Savers", cursive;
  animation: ${Blink} 1.5s linear infinite alternate;
`;

const Loader = () => {
  return (
    <Container>
      <Text>Loading</Text>
    </Container>
  );
};

export default Loader;
