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
    min-width: 375px;
    /* Works on Chrome/Edge/Safari */
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
     }
    ::-webkit-scrollbar {
      width: 12px;
      background-color: #F5F5F5;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 2px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: rgba(0, 0, 0, .2);
    }
  }
`;
