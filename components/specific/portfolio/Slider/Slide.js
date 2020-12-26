import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import React from "react";
import noImage from "../../../../images/no_image.png";
import ax from "../../../../styled-components/accessor";
import {
  customMedia,
  screenDesktop
} from "../../../../styled-components/customMedia";

const SlideWrapper = styled.div`
  background-color: ${ax("slide-bg-color")};
  width: 700px;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
  ${customMedia.lessThan("1160px")`
    width: 950px;
  `}
  ${customMedia.lessThan("desktop")`
    width: 336px;
    flex-direction: column;
    padding: 0 0 39px;
  `}
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  ${customMedia.lessThan("1160px")`
    width: 400px;
  `}
  ${customMedia.lessThan("desktop")`
    width: 336px;
    height: 250px;
    padding-top: 0;
  `}
`;

const Image = styled.img`
  // for desktop image
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
  ${props =>
    !props.imageUrl &&
    !props.mobileImageUrl &&
    css`
      max-width: 250px;
      bottom: unset;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `};
  // for mobile image
  ${customMedia.lessThan("desktop")`
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    ${props =>
      !props.imageUrl &&
      !props.mobileImageUrl &&
      css`
        max-width: 150px;
        bottom: unset;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `};
  `};
`;

const Slide = ({ imageUrl, mobileImageUrl }) => {
  return (
    <SlideWrapper>
      <ImageWrapper>
        <picture>
          <source
            srcSet={imageUrl || noImage}
            media={`(min-width: ${screenDesktop}px)`}
          />
          <Image
            src={mobileImageUrl || noImage}
            alt="project screenshot"
            imageUrl={imageUrl}
            mobileImageUrl={mobileImageUrl}
          />
        </picture>
      </ImageWrapper>
    </SlideWrapper>
  );
};

Slide.defaultProps = {
  mobileImageUrl: ""
};

Slide.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  mobileImageUrl: PropTypes.string
};

export default Slide;
