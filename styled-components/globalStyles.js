import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  // ignore cannot resolve file errors
  @font-face {
    font-family: 'Aldrin';
    src: url('/static/fonts/FSAldrin-Light.woff') format('woff'),
    url('/static/fonts/FSAldrin-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Aldrin';
    src: url('/static/fonts/FSAldrin-Regular.eot');
    src: url('/static/fonts/FSAldrin-Regular.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/FSAldrin-Regular.woff') format('woff'),
    url('/static/fonts/FSAldrin-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Aldrin';
    src: url('/static/fonts/FSAldrin-Medium.eot');
    src: url('/static/fonts/FSAldrin-Medium.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/FSAldrin-Medium.woff') format('woff'),
    url('/static/fonts/FSAldrin-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  html, body {
    margin: 0;
    font-family: "Aldrin", sans-serif;
    background-image: linear-gradient(45deg, #654ea3, #eaafc8);
  }
`;
