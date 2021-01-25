import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: Center;
  justify-content: flex-end;
  font-family: "Jaldi", sans-serif;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  width: 720px;
  height: 500px;
  overflow: hidden;
`;
export const Scroll = styled.div`
  width: 740px;
  height: 490px;
  overflow: auto;
`;
export const List = styled.ul`
  height: 500px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-auto-rows: 80px;
  gap: 15px;
  padding: 20px;
`;

export const Button = styled.button`
  border: 1px solid #5e3030;
  outline: none;
  background-color: #5e3030;
  color: white;
  width: 100px;
  height: 30px;
  margin-left: 5px;
  opacity: 0.7;
  cursor: pointer;
  transform: translateY(20px);
`;

export const Filter = styled.div`
  font-size: 13px;
  color: rgb(182, 29, 29);
`;
export const Select = styled.select`
  margin-left: 5px;
  border: 1px solid #5e3030;
  background-color: transparent;
  outline: none;
  font-size: 13px;
  color: rgb(182, 29, 29);
  font-family: "Jaldi", sans-serif;
  font-weight: bold;
  letter-spacing: 1.5px;
`;
export const Option = styled.option`
  background-color: rgb(65, 25, 25);
  color: wheat;
`;

export const Text = styled.div`
  font-family: "Jaldi", sans-serif;
  color: rgb(65, 25, 25);
  letter-spacing: 1.5px;
  margin-top: 100px;
  font-size: 18px;
`;
export const SLink = styled(Link)`
  text-decoration: none;
  color: rgb(65, 25, 25);
  width: 100%;
  display: grid;
  place-items: center;
`;
