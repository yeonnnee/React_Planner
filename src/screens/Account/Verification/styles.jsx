import styled from "styled-components";

export const Section = styled.div`
  width: 575px;
  height: 300px;
  border: 1px solid #baa7a1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-left: 75px;
`;

export const Email = styled.div`
  padding: 5px 10px;
  border: 1px solid #baa7a1;
  border-radius: 20px;
`;
export const Text = styled.div`
  font-size: 15px;
  margin-top: 20px;

  &:nth-child(1) {
    transform: translateY(-20px);
    font-size: 18px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  height: 50px;
`;
export const Input = styled.input`
  width: 80%;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #baa7a1;

  &:placeholder {
    font-family: "Life Savers", cursive;
  }
`;
export const Button = styled.button`
  outline: none;
  border: 1px solid #baa7a1;
  width: 100px;
  height: 30px;
  margin-top: 20px;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;
