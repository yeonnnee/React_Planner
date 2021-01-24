import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  transform: translateY(20px);
  border: 1px solid grey;
  font-family: "Do Hyeon", sans-serif;
  padding: 20px;
`;

export const Title = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  transform: translateY(-30px);
`;

export const TitleText = styled.div`
  font-size: 28px;
  margin: 0 20px;
  text-align: center;
  line-height: 1.5;
`;
export const Grid = styled.div`
  width: 100%;
  height: 450px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 5px;
`;
export const Table = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 23px 60px;
`;
export const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: #40739e;
`;
export const CheckSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CheckBtn = styled.button`
  padding: 3px 5px;
`;
export const Section = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 20px;
`;
export const Stamp = styled.div`
  color: #c23616;
  border: 1px solid #c23616;
  padding: 5px 3px;
  transform: rotate(-40deg);
`;

export const Button = styled.button`
  border: 1px solid #30475e;
  outline: none;
  width: 100px;
  height: 30px;
  margin-left: 5px;
  cursor: pointer;
  background-color: #30475e;
  opacity: 0.7;
  color: white;
`;
