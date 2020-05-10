import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  // ignore cannot resolve file errors
  /* raleway-300 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    src: url('/static/fonts/Raleway/raleway-v14-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Raleway Light'), local('Raleway-Light'),
         url('/static/fonts/Raleway/raleway-v14-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/Raleway/raleway-v14-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-300.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/static/fonts/Raleway/raleway-v14-latin-300.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-regular - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/Raleway/raleway-v14-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Raleway'), local('Raleway-Regular'),
         url('/static/fonts/Raleway/raleway-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/Raleway/raleway-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/static/fonts/Raleway/raleway-v14-latin-regular.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-500 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    src: url('/static/fonts/Raleway/raleway-v14-latin-500.eot'); /* IE9 Compat Modes */
    src: local('Raleway Medium'), local('Raleway-Medium'),
         url('/static/fonts/Raleway/raleway-v14-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/Raleway/raleway-v14-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-500.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/static/fonts/Raleway/raleway-v14-latin-500.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-600 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    src: url('/static/fonts/Raleway/raleway-v14-latin-600.eot'); /* IE9 Compat Modes */
    src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
         url('/static/fonts/Raleway/raleway-v14-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/Raleway/raleway-v14-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-600.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/static/fonts/Raleway/raleway-v14-latin-600.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-700 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    src: url('/static/fonts/Raleway/raleway-v14-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Raleway Bold'), local('Raleway-Bold'),
         url('/static/fonts/Raleway/raleway-v14-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/Raleway/raleway-v14-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-700.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/static/fonts/Raleway/raleway-v14-latin-700.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-800 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 800;
    src: url('/static/fonts/Raleway/raleway-v14-latin-800.eot'); /* IE9 Compat Modes */
    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'),
         url('/static/fonts/Raleway/raleway-v14-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/Raleway/raleway-v14-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-800.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/Raleway/raleway-v14-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/static/fonts/Raleway/raleway-v14-latin-800.svg#Raleway') format('svg'); /* Legacy iOS */
  }

  html, body {
    margin: 0;
    font-family: "Raleway", sans-serif;
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
  * {
    box-sizing: border-box;
  }
`;
