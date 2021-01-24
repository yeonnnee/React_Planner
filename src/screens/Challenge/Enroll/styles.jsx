import styled from "styled-components";

export const Tag = styled.span`
  background-color: #f9ca24;
  padding: 3px 5px;
`;

export const Section = styled.div`
  margin-top: 20px;
  font-family: "Jaldi", sans-serif;
  display: grid;
  place-items: center;
`;
export const Form = styled.form``;
export const Input = styled.input`
  padding: 5px 10px;
  outline: none;
  border: ${(props) =>
    props.error ? "2px solid #90323d" : "1px solid rgb(65, 25, 25)"};
`;
export const Button = styled.button`
  outline: none;
  border: none;
  background-color: rgb(65, 25, 25);
  color: wheat;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;
export const Text = styled.div`
  line-height: 1.5;
  font-size: 16px;

  &:nth-child(2) {
    margin-top: 30px;
    font-size: 13px;
  }
`;
export const Example = styled.div`
  font-size: 12px;
  line-height: 2;
  color: rgb(65, 25, 25);
`;
