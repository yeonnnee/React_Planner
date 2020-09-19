import styled, { keyframes } from "styled-components";

const MoveDown = keyframes`
 from {
   transform: translateY(-150px);
 }
 to{
   transform: translateY(0);
 }
`;
export const Container = styled.div`
  height: 60%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Error = styled.div`
  width: 100%;
  font-size: 12px;
  color: red;
  display: felx;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Section = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
  height: 200px;
  animation: ${MoveDown} 1s linear;
`;
export const Input = styled.input`
  width: 80%;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  &::placeholder {
    font-family: "Fredericka the Great", cursive;
  }
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
