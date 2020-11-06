import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 100px;
  right: 7px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  font-family: "Rajdhani", sans-serif;
  @media only screen and (max-width: 640px) {
    position: relative;
    bottom: -34px;
  }
`;

const Footer = () => {
  return <Container>Ⓒ2020.yeonnnee.All rights reserved </Container>;
};

export default Footer;
