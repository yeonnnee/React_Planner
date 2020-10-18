import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 450px;
  margin-left: 30px;
`;
export const Header = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
`;
export const Text = styled.div`
  font-size: 13px;
  margin-top: 10px;
  line-break: auto;
`;
export const Section = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 20px;
`;
export const Question = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
export const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
export const Option = styled.option``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  height: 50px;
`;
export const Input = styled.input`
  width: 80%;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  outline: none;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #baa7a1")};
  &::placeholder {
    font-family: "Life Savers", cursive;
  }
`;
export const Intro = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #efefef;
`;
export const Notice = styled.div`
  margin-top: 40px;
  padding: 20px 0;
  font-size: 13px;
  border-bottom: 1px solid #efefef;
  line-height: 1.5;
`;
export const Error = styled.span`
  color: red;
  font-size: 13px;
  margin-top: 5px;
`;
export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  width: 120px;
  padding: 5px;
  height: 30px;
  margin-top: 20px;
  background: linear-gradient(to left top, #b71540, #eb5757);
`;
