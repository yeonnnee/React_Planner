import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  top: -30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #30475e;
  width: 80px;
  height: 30px;
  border: 1px solid #30475e;
  font-family: "Rajdhani", sans-serif;
  &:hover {
    background-color: #30475e;
    color: #c2b0ad;
  }
`;
export const AddSection = styled.div`
  width: 90%;
  padding: 14px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #30475e;
  border-bottom: 1px solid #30475e;
`;
export const Wrapper = styled.div`
  width: 460px;
  height: 250px;
  overflow: hidden;
`;
export const SelectedMonthly = styled.ul`
  width: 90%;
  padding: 14px;
  height: 100px;
  border-top: 1px solid #30475e;
  border-bottom: 1px solid #30475e;
  display: grid;
  &:focus-within {
    height: 250px;
  }
  &:focus-within ~ ${Wrapper} {
    display: none;
  }
`;

export const Scroll = styled.div`
  width: 480px;
  height: 240px;
  overflow: auto;
`;
export const UnSelectedMonthly = styled.ul`
  height: 260px;
  padding: 20px;
  display: grid;
  gap: 5px;
`;
export const Text = styled.div`
  font-family: "Life Savers", cursive;
  display: flex;
  justify-content: center;
`;
