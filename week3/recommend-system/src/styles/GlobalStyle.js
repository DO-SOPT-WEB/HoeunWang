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
   
}
`;
