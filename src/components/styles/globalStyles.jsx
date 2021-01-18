import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box
  }

  html,body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: #cfc0bd;
    overflow: hidden;
    padding: 20px 0;
  }

`;

export default globalStyles;
