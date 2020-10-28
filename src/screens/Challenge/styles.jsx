import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 460px;
  height: 480px;
  overflow: hidden;
  margin-left: 20px;
  margin-top: 20px;
`;
export const Scroll = styled.div`
  width: 480px;
  height: 490px;
  overflow: auto;
`;
export const List = styled.ul`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  font-family: "Jaldi", sans-serif;
  width: 100px;
  height: 30px;
  border-radius: 3px;
  margin-top: 25px;
  outline: none;
  border: none;
  background-color: rgb(65, 25, 25);
  color: wheat;
  letter-spacing: 1.5px;
  cursor: pointer;
`;

export const Header = styled.div`
  font-size: 15px;
`;

export const Section = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: Center;
  justify-content: space-between;
  font-family: "Jaldi", sans-serif;
  font-weight: bold;
  letter-spacing: 1.5px;
`;
export const Filter = styled.div`
  font-size: 13px;
  color: rgb(182, 29, 29);
`;
export const Select = styled.select`
  margin-left: 5px;
  border: 1px solid white;
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
`;
