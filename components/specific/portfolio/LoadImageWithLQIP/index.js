import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  customMedia,
  screenDesktop
} from "../../../../styled-components/customMedia";

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  .placeholder-image,
  .real-image {
    width: 100%;
    height: 100%;
  }
  .blur .real-image {
    opacity: 0;
  }

  .real-image {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    ${customMedia.lessThan("desktop")`
      object-fit: unset;
    `};
  }

  .blur {
    filter: blur(5px);
  }

  .unblur {
    animation: unblur 1s linear;
  }

  @keyframes unblur {
    from {
      filter: blur(5px);
    }
    to {
      filter: blur(0);
    }
  }
`;

const LoadImageWithLQIP = ({
  backupImgSrc,
  desktopImgSrc,
  mobileImgSrc,
  altText
}) => {
  const [blur, setBlur] = React.useState(true);
  const largeImg = React.useRef();

  React.useEffect(() => {
    if (largeImg.current.complete) {
      setBlur(false);
    }

    largeImg.current.addEventListener("load", () => {
      setBlur(false);
    });
  }, []);

  return (
    <ImageContainer className={`image-container ${blur ? "blur" : "unblur"}`}>
      <img className="placeholder-image" src={backupImgSrc} alt={altText} />
      <picture>
        <source
          srcSet={desktopImgSrc}
          media={`(min-width: ${screenDesktop}px)`}
        />
        <img
          src={mobileImgSrc}
          alt={altText}
          ref={largeImg}
          className="real-image"
        />
      </picture>
    </ImageContainer>
  );
};

LoadImageWithLQIP.propTypes = {
  backupImgSrc: PropTypes.string.isRequired,
  desktopImgSrc: PropTypes.string.isRequired,
  mobileImgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
};

export default LoadImageWithLQIP;
