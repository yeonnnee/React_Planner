import styled from "styled-components";

export const Container = styled.div`
  font-family: "Do Hyeon", sans-serif;
`;
export const Title = styled.div`
  font-size: 28px;
  margin: 0 20px;
  text-align: center;
  line-height: 1.5;
  @media only screen and (max-width: 640px) {
    font-size: 25px;
  }
`;
export const Grid = styled.div`
  width: 100%;
  height: 450px;
  display: grid;
  margin-top: 20px;
  padding: 0 20px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  @media only screen and (max-width: 640px) {
    width: 300px;
    height: 300px;
    padding: 0 10px;
    margin: 10px 0;
  }
`;
export const Table = styled.div`
  width: 75px;
  height: 80px;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 20px 60px;
  @media only screen and (max-width: 640px) {
    width: 55px;
    height: 65px;
  }
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
  @media only screen and (max-width: 640px) {
    width: 50px;
    margin-bottom: 15px;
    padding: 0 2px 0 0;
  }
`;
export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Stamp = styled.div`
  color: #c23616;
  border: 1px solid #c23616;
  padding: 5px 3px;
  transform: rotate(-40deg);

  @media only screen and (max-width: 640px) {
    font-size: 13px;
    margin-bottom: 15px;
    transform: rotate(-30deg);
  }
`;
