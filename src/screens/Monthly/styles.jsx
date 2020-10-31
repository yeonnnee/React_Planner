import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  top: -30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 640px) {
    height: 430px;
    top: -30px;
  }
`;

export const AddLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #30475e;
  color: #feca57;
  width: 80px;
  height: 30px;
  border: 1px solid #30475e;
  border-radius: 3px;
  font-family: "Rajdhani", sans-serif;
`;

export const DetailLink = styled(Link)`
  text-decoration: none;
`;

export const AddSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const List = styled.li`
  width: 100%;
  height: 70px;
  margin: 5px 0;
  border: 1px solid #30475e;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rajdhani", sans-serif;
  font-size: 18px;
  background-color: #4b5d67;
  color: #c2b0ad;
  z-index: 1;
  &:hover {
    background-color: #374851;
  }
  &:focus {
    background-color: #374851;
  }
`;
export const Title = styled.div``;
export const Wrapper = styled.div`
  width: 460px;
  height: 250px;
  overflow: hidden;

  @media only screen and (max-width: 640px) {
    display: none;
  }
  @media only screen and (max-width: 700px) {
    width: 350px;
    height: 100px;
  }
`;
export const SelectedMonthly = styled.ul`
  width: 90%;
  padding: 14px;
  height: 100px;
  display: grid;
  z-index: 1;
  &:focus-within {
    height: 250px;
  }
  &:focus-within ~ ${Wrapper} {
    display: none;
  }
`;

export const Scroll = styled.div`
  width: 480px;
  height: 240px;
  overflow: auto;
  @media only screen and (max-width: 640px) {
    width: 350px;
    height: 100px;
  }
  @media only screen and (max-width: 700px) {
    width: 370px;
    height: 100px;
  }
`;
export const UnSelectedMonthly = styled.ul`
  height: 260px;
  padding: 20px;

  @media only screen and (max-width: 640px) {
    width: 330px;
    height: 130px;
    position: relative;
    top: -15px;
  }
  @media only screen and (max-width: 700px) {
    width: 350px;
    height: 100px;
  }
`;
export const Text = styled.div`
  font-family: "Rajdhani", sans-serif;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const SubTitle = styled.div`
  font-family: "Rajdhani", sans-serif;
  font-size: 13px;
  opacity: 0.7;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 1.5px;
  border-bottom: 1px solid #30475e;
  @media only screen and (max-width: 640px) {
    &:nth-child(4) {
      display: none;
    }
  }
`;
