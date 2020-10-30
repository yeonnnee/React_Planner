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
export const AddSection = styled.div`
  width: 90%;
  padding: 14px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #30475e;
  border-bottom: 1px solid #30475e;
`;
export const Wrapper = styled.div`
  width: 460px;
  height: 250px;
  overflow: hidden;
  @media only screen and (max-width: 640px) {
    width: 330px;
    height: 110px;
  }
`;
export const SelectedMonthly = styled.ul`
  width: 90%;
  padding: 14px;
  height: 100px;
  border-top: 1px solid #30475e;
  border-bottom: 1px solid #30475e;
  display: grid;
  &:focus-within {
    height: 250px;
  }
  &:focus-within ~ ${Wrapper} {
    display: none;
  }
  @media only screen and (max-width: 640px) {
    &:focus-within {
      height: 200px;
    }
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
`;
export const Text = styled.div`
  font-family: "Life Savers", cursive;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
