import styled from "styled-components";

export const Container = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 640px) {
    height: 95%;
    margin-top: 0;
    justify-content: center;
    position: relative;
    top: -50px;
  }
`;
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
  @media only screen and (max-width: 640px) {
    width: 250px;
  }
`;
export const Section = styled.div`
  margin-top: 30px;
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  outline: none;
`;
