import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const MoveDown = keyframes`
 from {
   transform: translateY(-250px);
 }
 to{
   transform: translateY(0);
 }
`;

export const Label = styled.label`
  font-size: 14px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Container = styled.div`
  height: 80%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Life Savers", cursive;
  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;
export const Title = styled.span`
  font-size: 25px;
  /* font-family: "Fredericka the Great", cursive; */
  font-family: "Cinzel Decorative", cursive;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  height: 60px;
  width: 100%;
  margin: 5px 30px;
  display: grid;
  grid-template-rows: 40px;
  grid-template-columns: 100px 400px;
  gap: 10px;
  animation: ${MoveDown} 1s linear;
`;

export const Input = styled.input`
  width: 60%;
  padding: 10px 20px;
  outline: none;
  border: ${(props) => (props.error ? "1px solid red" : "none")};
  border-radius: 5px;
  &:focus {
    border: 2px solid #20639b;
  }
`;
export const Wrapper = styled.div`
  margin: 20px;
  height: 400px;
  width: 100%;
  overflow: hidden;
`;
export const Section = styled.div`
  display: flex;
  animation: ${MoveDown} 1s linear;
`;
export const Info = styled.div`
  width: 60%;
  height: 20px;
  margin: 0 33%;
  font-size: 11px;
  display: flex;
  align-items: center;
  position: relative;
  top: -15px;
  animation: ${MoveDown} 1s linear;
`;
export const Error = styled.div`
  width: 60%;
  height: 20px;
  margin: 0 33%;
  font-size: 11px;
  display: flex;
  align-items: center;
  position: relative;
  top: -15px;
  color: red;
  line-height: 1.5;
`;
export const CancelBtn = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-family: "Life Savers", cursive;

  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: #382933;
`;
