import styled from "styled-components";

// Tasks List

export const List = styled.ul`
  height: 400px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const ListItem = styled.li`
  padding: 5px 15px;
  display: grid;
  grid-template-columns: 20px 150px 30px;
  font-size: 15px;

  @media only screen and (max-width: 640px) {
    grid-template-columns: 20px 100px 30px;
  }
`;

export const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid #5a2330;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a2330;
  cursor: Default;
  &:hover {
    opacity: 1;
    border: 1px solid #5a2330;
  }
`;
export const DelBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: #5a2330;
  }
`;

// Tasks

export const Container = styled.div``;

export const Header = styled.div`
  display: felx;
  justify-content: center;
  position: relative;
  margin: 20px;
  font-family: "Fredericka the Great", cursive;
`;
export const ListCon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px, 1fr;

  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 180px);
  }
`;
export const Pending = styled.div``;
export const Finished = styled.div``;
export const Title = styled.span`
  display: flex;
  justify-content: center;
  margin: 20px;
  font-family: "Fredericka the Great", cursive;
`;

export const Scroll = styled.div`
  width: 248px;
`;
export const Wrapper = styled.div`
  width: 230px;
  overflow: hidden;
`;
