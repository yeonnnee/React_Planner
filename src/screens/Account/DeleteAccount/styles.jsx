import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 570px;
  padding: 20px;
  border-radius: 5px;
  transform: translateY(30px);
  border: 1px solid #cfcdcd;
`;

export const Title = styled.div`
  font-size: 20px;
`;
export const Text = styled.div`
  font-size: 15px;
  margin-top: 10px;
  line-height: 1.5;
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
  margin: 10px 0;
  outline: none;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #dfdede")};

  &:focus {
    border: ${(props) =>
      props.error ? "1px solid red" : "1px solid  #30475e"};
  }
`;
export const Intro = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #efefef;
  margin-top: 20px;
`;
export const CheckForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
export const CheckBox = styled.input``;

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
  margin-left: 5px;
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
