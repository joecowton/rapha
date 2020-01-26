import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css?family=Montserrat:700|Work+Sans:400,700&display=swap');
  
  body {  
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
