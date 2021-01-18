import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rajdhani", sans-serif;
  position: absolute;
  bottom: 10px;
  left: 45%;
`;

const Footer = () => {
  return <Container>Ⓒ2020.yeonnnee.All rights reserved </Container>;
};

export default Footer;
