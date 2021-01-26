import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  display: flex;
  border-radius: 10px;
`;
export const List = styled.ul`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Menu = styled.li`
  text-decoration: none;
  font-weight: bold;
  font-family: "Zilla Slab", serif;
  color: ${(props) => (props.current ? "#4d3e3e" : "#835858")};
  &:hover {
    color: #4d3e3e;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  color: #99a2be;
`;
