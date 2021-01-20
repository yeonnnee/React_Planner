import styled from "styled-components";
import { Link } from "react-router-dom";

// monthly presenter

export const Section = styled.div`
  width: 100%;
  height: 600px;
  padding: 10px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 340px 30px 230px;
  border: 1px solid #dbd7d7;
  margin-top: 10px;
  gap: 5px;
`;

export const Column = styled.div`
  font-family: "Rajdhani", sans-serif;
  font-size: 16px;
  padding: 3px 0;
  opacity: 0.7;
  width: 617px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  letter-spacing: 1.5px;
  border-bottom: 1px solid #525151;
`;

// Monthly content

export const SubTitle = styled.div`
  width: 617px;
  display: flex;
  justify-content: space-between;
  opacity: 0.7;
  font-size: 14px;
`;
export const Text = styled.div`
  font-family: "Rajdhani", sans-serif;
  font-size: 15px;
`;

export const EditLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: #9e8181;

  &:hover {
    color: #611e1e;
  }
`;

export const Wrapper = styled.div`
  width: 618px;
  overflow: hidden;
`;

export const Scroll = styled.div`
  width: 635px;
`;

export const List = styled.ul`
  width: 617px;
  height: 210px;
  overflow: auto;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 20px;
  gap: 5px;
`;
export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 50px 20px;
`;

// Add Section

export const AddSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-20px);
`;

export const AddLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #525151;
  color: #f3f1f1;
  width: 80px;
  height: 30px;
  border: 1px solid #353535;
  margin-top: 20px;
  font-size: 13px;
`;

export const Notice = styled.div`
  opacity: 0.7;
  font-size: 14px;
`;
