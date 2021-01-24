import styled from "styled-components";

export const Title = styled.div`
  font-size: 20px;
`;
export const Text = styled.div`
  font-size: 13px;
  margin-top: 20px;
`;

export const Form = styled.form`
  margin-top: 30px;
`;
export const Input = styled.input`
  outline: none;
  width: 350px;
  padding: 10px 20px;
  margin-bottom: 40px;
  border: 1px solid #baa7a1;

  &:focus {
    border: 1px solid #30475e;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  outline: none;
  border: 1px solid #baa7a1;
  box-shadow: 2px 2px 5px #baa7a1, inset -1px -1px 3px #baa7a1;

  &:hover {
    background-color: #eeebeb;
  }
`;
