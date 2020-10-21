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
    background-color: #cfc0bd;
    overflow: hidden
  }
  #root {
    height: 700px;
    width: 500px;
    background-color: #E2E0DC;
    box-shadow: 5px 5px 15px #baa7a1,  5px 5px 10px #baa7a1,
    inset -5px -5px 15px #baa7a1, inset 1px 1px 5px #baa7a1;
    border-radius: 5px;
  }


@media only screen and (max-width: 640px) {
    #root {
    height: 520px;
    width: 350px;
  }
}




`;

export default globalStyles;
