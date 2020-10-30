import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media only screen and (max-width: 640px) {
    margin-bottom: 100px;
  }
`;
export const Text = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
`;
export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Error = styled.div`
  position: relative;
  top: -20px;
  left: 35px;
  width: 300px;
  height: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  color: red;
  line-height: 1.5;
  @media only screen and (max-width: 640px) {
    top: -17px;
  }
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
