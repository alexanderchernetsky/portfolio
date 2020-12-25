import { generateMedia } from "styled-media-query";

// screen sizes
export const wideScreen = 1440;
export const mediumScreen = 1200;
export const screenDesktop = 992;
export const screenTablet = 768;
export const screenPhone = 480;

export const customMedia = generateMedia({
  wideScreen: `${wideScreen}px`,
  mediumScreen: `${mediumScreen}px`,
  desktop: `${screenDesktop}px`,
  tablet: `${screenTablet}px`,
  mobile: `${screenPhone}px`
});
