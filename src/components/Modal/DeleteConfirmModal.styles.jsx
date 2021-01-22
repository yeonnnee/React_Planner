import styled, { keyframes } from "styled-components";

const SlideDown = keyframes`
    from {
        transform:translateY(-30px);
        opacity:0;
    }to {
        transfrom:translateY(0);
        opacity:1;
    }
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #cccbcb;
  opacity: 0.8;
  display: grid;
  place-items: center;
`;

export const Modal = styled.div`
  width: 455px;
  height: 209px;
  border: 1px solid #30475e;
  background-color: #f1efef;
  box-shadow: 5px 5px 5px grey, 0 0 5px grey;
  display: grid;
  grid-template-rows: 1fr 100px;
  place-items: center;
  animation: ${SlideDown} 0.5s linear;
`;

export const ConfirmMessage = styled.h1`
  font-size: 14px;
  transform: translateY(30px);
`;

export const Button = styled.button`
  border: 1px solid #30475e;
  outline: none;
  background-color: none;
  width: 100px;
  height: 30px;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    background-color: #30475e;
    opacity: 0.7;
    color: white;
  }
`;

export const Column = styled.div``;
