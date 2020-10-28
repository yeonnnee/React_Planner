import styled from "styled-components";

export const Container = styled.div`
  font-family: "Jaldi", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 38px;
  font-family: "Cinzel Decorative", cursive;
  letter-spacing: 1.5px;
  color: rgb(65, 25, 25);
  @media only screen and (max-width: 640px) {
    font-size: 30px;
  }
`;
export const Tag = styled.span`
  margin-bottom: 5px;
  background-color: #f9ca24;
  padding: 0 3px;
`;
export const Section = styled.div`
  margin-top: 20px;
  @media only screen and (max-width: 640px) {
    padding: 0 20px;
  }
`;
export const Form = styled.form`
  margin: 20px 0;
`;
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
  font-size: 14px;
  &:nth-child(3) {
    margin-top: 30px;
    font-size: 13px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 13px;
    margin-top: 10px;
  }
`;
export const Example = styled.div`
  font-size: 12px;
  line-height: 2;
  color: rgb(65, 25, 25);
  @media only screen and (max-width: 640px) {
    font-size: 11px;
  }
`;
