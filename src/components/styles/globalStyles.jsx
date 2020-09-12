import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box
  }
  html, body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: #E2E0DC;
    overflow: hidden
  }
  #root {
    height: 700px;
    width: 450px;
    background-color: #D4C8BE;
    box-shadow: 5px 5px 15px #baa7a1,  5px 5px 10px #baa7a1,
    inset -5px -5px 15px #baa7a1;
  }
`;

export default globalStyles;
