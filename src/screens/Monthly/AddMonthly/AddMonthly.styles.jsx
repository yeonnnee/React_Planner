import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`;

export const Section = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  margin-left: 5px;
  outline: none;
  border: 1px solid #30475e;
  background: none;
  cursor: pointer;
  font-family: "Rajdhani", sans-serif;

  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

export const ListSection = styled.section`
  width: 100%;
  margin: 20px 0;
  padding: 10px 20px 0 20px;
  background-color: #e8e8e8;
`;
