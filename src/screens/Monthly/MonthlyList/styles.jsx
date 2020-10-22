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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px;
  display: none;
  &:hover {
    display: block;
    background-color: #e8e8e8;
    z-index: 1;
  }
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
  &:focus ~ ${Section} {
    display: block;
    animation: ${SlideDown} 0.5s linear forwards;
    background-color: #e8e8e8;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 20px;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
`;
export const Title = styled.div``;
export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  overflow: hidden;
`;
export const Scroll = styled.div`
  width: 110%;
  height: 60px;
  overflow: auto;
`;
export const Detail = styled.ul`
  font-family: "Rajdhani", sans-serif;
`;
export const Desc = styled.li`
  margin: 5px 0 0 30px;
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
  border: 1px solid #30475e;
  margin-right: 10px;
  font-family: "Rajdhani", sans-serif;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;
