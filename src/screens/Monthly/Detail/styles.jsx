import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Monthly List
export const SlideDown = keyframes`
  from {
    transform: translateY(-30px)
  } 
  to{
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  padding: 10px 20px 0 20px;
  background-color: #e8e8e8;
  animation: ${SlideDown} 0.5s linear forwards;
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
export const Header = styled.div`
  width: 100%;
  height: 20px;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.7;
`;
export const Title = styled.div``;
export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  @media only screen and (max-width: 640px) {
    height: 265px;
  }
`;
export const Scroll = styled.div`
  width: 110%;
  height: 200px;
  overflow: auto;
  @media only screen and (max-width: 640px) {
    height: 230px;
  }
`;
export const Detail = styled.ul`
  font-family: "Rajdhani", sans-serif;
`;
export const Desc = styled.li`
  margin: 5px 0 0 20px;
  list-style: square;
  width: 80%;
`;
export const BtnSection = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const EditLink = styled(Link)``;
export const Btn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  outline: none;
  border: 1px solid #374851;
  margin-right: 10px;
  font-family: "Rajdhani", sans-serif;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #374851;
    color: #c2b0ad;
  }
`;
