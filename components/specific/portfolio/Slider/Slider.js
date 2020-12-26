import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import React from "react";
import Slide from "./Slide";
import ax from "../../../../styled-components/accessor";
import sliderArrow from "../../../../images/icons/right-arrow.svg";
import { customMedia } from "../../../../styled-components/customMedia";
import { Button } from "../ProjectCard";

const Overlay = styled.div`
  background-color: ${ax("slider-overlay-color")};
  height: 100%;
  width: 100%;
  opacity: 1;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.3s;
  z-index: 2;
`;

const Modal = styled.div`
  width: 700px;
  position: absolute;
  z-index: 3;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 700px;
  height: 450px;
  display: flex;
  overflow-x: auto;
  ${customMedia.lessThan("1160px")`
    width: 950px;
  `}
  ${customMedia.lessThan("desktop")`
    width: 336px;
    height: 579px;
  `}
`;

const SliderControl = styled.div`
  cursor: pointer;
  position: absolute;
  background-color: ${ax("overlay-color")};
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 65px;
  height: 55px;
  background-color: ${ax("slider-controls-bg-color")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props =>
    props.type === "next" &&
    css`
      right: 0;
      left: unset;
    `}
  ${props =>
    props.type === "previous" &&
    css`
      transform: rotate(180deg);
    `}
  ${customMedia.lessThan("desktop")`
    width: 50%;
    height: 39px;
    bottom: 0;
    top: unset;
  `}
`;

const Arrow = styled.img`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  ${customMedia.lessThan("desktop")`
    left: 16px;
    ${props =>
      props.type === "next" &&
      css`
        left: unset;
        right: 16px;
      `}
  `}
`;

const Close = styled.img`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
`;

const Slides = styled.div`
  display: flex;
  overflow-x: hidden;
  // these properties make scrolling smooth
  scroll-behavior: smooth; // for smooth scrolling on desktop, doesn't work on Safari
  // properties below allow to swipe slides smoothly on mobile devices
  scroll-snap-type: x mandatory; // is a required property on any scrollable container
  // you want to add scroll snapping to
  -webkit-overflow-scrolling: touch;
  ${customMedia.lessThan("desktop")`
    overflow-x: scroll;
  `};
  div {
    scroll-snap-align: start;
    flex-shrink: 0;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  background-color: ${ax("card-overlay-color")};
  padding: 35px 25px 25px;
  border-top: 3px solid ${ax("slider-border")};
`;

const InfoTitle = styled.h3`
  font-size: 22px;
  font-family: "Raleway-bold";
`;

const InfoSubtitle = styled.div`
  font-size: 11px;
  text-transform: capitalize;
  color: ${ax("slider-info-subtitle")};
  border-bottom: 1px solid ${ax("overlay-color")};
  font-weight: 300;
  padding-bottom: 15px;
`;

const InfoDescription = styled.p`
  font-size: 11px;
  line-height: 18px;
  margin-top: 15px;
`;

const InfoFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
`;

const Slider = ({ slides, title, subtitle, description }) => {
  let currentScrollXPosition = 0; // this variable defines which slide should be shown in the slider

  const sliderControlClickHandler = type => {
    const slidesCount = slides.length;
    const slidesWrapperElWidth = document.getElementById("slides-wrapper")
      .scrollWidth;
    const oneSlideWidth = slidesWrapperElWidth / slidesCount;
    if (type === "next") {
      currentScrollXPosition += oneSlideWidth;
      // check if it was the last slide to show
      if (currentScrollXPosition > slidesWrapperElWidth - oneSlideWidth) {
        currentScrollXPosition = slidesWrapperElWidth - oneSlideWidth;
      }
    } else {
      currentScrollXPosition -= oneSlideWidth;
      // check if it was the first slide
      if (currentScrollXPosition < 0) {
        currentScrollXPosition = 0;
      }
    }
    document.getElementById(
      "slides-wrapper"
    ).scrollLeft = currentScrollXPosition;
  };
  return (
    <>
      <Overlay />
      <Modal>
        <SliderWrapper>
          <SliderControl
            type="previous"
            onClick={() => sliderControlClickHandler("previous")}
          >
            <Arrow
              src={sliderArrow}
              alt="slider-control-arrow-previous"
              type="previous"
            />
          </SliderControl>

          <Slides id="slides-wrapper">
            {slides.map((slide, index) => {
              return (
                <Slide
                  key={index}
                  imageUrl={slide.imageUrl}
                  mobileImageUrl={slide.mobileImageUrl}
                />
              );
            })}
          </Slides>

          <SliderControl
            type="next"
            onClick={() => sliderControlClickHandler("next")}
          >
            <Arrow
              src={sliderArrow}
              alt="slider-control-arrow-next"
              type="next"
            />
          </SliderControl>
        </SliderWrapper>
        <InfoWrapper>
          <InfoTitle>{title}</InfoTitle>
          <InfoSubtitle>{subtitle}</InfoSubtitle>
          <InfoDescription>{description}</InfoDescription>
          <InfoFooter>
            <Button>View site</Button>
            <Close src={sliderArrow} alt="slider-control-close" />
          </InfoFooter>
        </InfoWrapper>
      </Modal>
    </>
  );
};

Slider.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      mobileImageUrl: PropTypes.string
    })
  ).isRequired
};

export default Slider;
