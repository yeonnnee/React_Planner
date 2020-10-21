import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 300px;
  border: 1px solid #baa7a1;
  border-radius: 10px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 640px) {
    margin-left: 35px;
  }
`;
export const Header = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
`;
export const Email = styled.span`
  padding: 5px 10px;
  border: 1px solid #baa7a1;
  border-radius: 20px;
`;
export const Text = styled.div`
  font-size: 15px;
  margin-top: 20px;
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
  border: none;
  &::placeholder {
    font-family: "Life Savers", cursive;
  }
  &:focus {
    border: 1px solid #baa7a1;
  }
`;
export const Button = styled.button`
  outline: none;
  border: 1px solid #baa7a1;
  width: 100px;
  height: 30px;
  margin-top: 20px;
  background: none;
  &:hover {
    background-color: #efefef;
  }
`;
