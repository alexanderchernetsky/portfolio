import PropTypes from "prop-types";
import styled from "styled-components";
import React from "react";
import ax from "../../../../styled-components/accessor";
import { customMedia } from "../../../../styled-components/customMedia";
import LoadImage from "../../../common/LoadImageWithLQIP";

const SlideWrapper = styled.div`
  background-color: ${ax("slide-bg-color")};
  width: 700px;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
  ${customMedia.lessThan("desktop")`
    width: 375px;
    flex-direction: column;
  `}
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  ${customMedia.lessThan("desktop")`
    background-color: ${ax("card-overlay-color")};
    width: 375px;
    height: 250px;
    padding-top: 0;
  `}
`;

const Slide = ({ imageUrl, mobileImageUrl, backupImageUrl }) => {
  return (
    <SlideWrapper>
      <ImageWrapper>
        <LoadImage
          altText="project screenshot"
          desktopImgSrc={imageUrl}
          mobileImgSrc={mobileImageUrl}
          backupImgSrc={backupImageUrl}
        />
      </ImageWrapper>
    </SlideWrapper>
  );
};

Slide.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  mobileImageUrl: PropTypes.string.isRequired,
  backupImageUrl: PropTypes.string.isRequired
};

export default Slide;
