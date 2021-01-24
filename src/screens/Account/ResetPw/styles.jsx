import styled from "styled-components";

export const Error = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  color: red;
  transform: translateX(137px) translateY(-15px);
`;

export const Notice = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 12px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  width: 120px;
  padding: 5px;
  height: 30px;
  margin-top: 20px;
  background: linear-gradient(to left top, #b71540, #eb5757);

  &:active {
    background: linear-gradient(to right bottom, #b71540, #eb5757);
  }
`;
