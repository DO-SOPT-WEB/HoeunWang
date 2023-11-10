import { createGlobalStyle } from "styled-components";

import { ResetStyle } from "./ResetStyle";

export const GlobalStyle = createGlobalStyle`
${ResetStyle}


html{
  scroll-behavior: smooth;
}
body{
    margin: 0 auto;
   background-color: #FFFFE0;
   font-family: sans-serif;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 1;
}
`;
