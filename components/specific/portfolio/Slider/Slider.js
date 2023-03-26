import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

import Slide from './Slide';
import sliderArrow from '../../../../images/icons/right-arrow.svg';
import sliderCloseIcon from '../../../../images/icons/close.svg';
import isUserAgentSignallingMobile from '../../../../utils/isUserAgentSignallingMobile';
import {
    Arrow,
    BtnText,
    Close,
    CloseWrapper,
    InfoDescription,
    InfoFooter,
    InfoSubtitle,
    InfoTitle,
    InfoWrapper,
    Overlay,
    SliderWrapper,
    Slides,
    ViewSiteButton,
    SliderControl,
    Modal
} from './styled-components';

const Slider = ({slides, title, subtitle, description, onClose, href}) => {
    const currentScrollXPosition = useRef(0);
    // let currentScrollXPosition = 0; // this variable defines which slide should be shown in the slider
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setLastSlide] = useState(false);

    const sliderControlClickHandler = type => {
        const slidesCount = slides.length;
        // eslint-disable-next-line no-undef
        const slidesWrapperElWidth = document.getElementById('slides-wrapper').scrollWidth;
        const oneSlideWidth = slidesWrapperElWidth / slidesCount;
        if (type === 'next') {
            // NEXT
            currentScrollXPosition.current += oneSlideWidth;
            setIsFirstSlide(false);
            // check if it was the last slide to show
            if (currentScrollXPosition.current >= slidesWrapperElWidth - oneSlideWidth) {
                currentScrollXPosition.current = slidesWrapperElWidth - oneSlideWidth;
                setLastSlide(true);
            }
        } else {
            // PREVIOUS
            currentScrollXPosition.current -= oneSlideWidth;
            setLastSlide(false);
            // check if it was the first slide
            if (currentScrollXPosition.current <= 0) {
                currentScrollXPosition.current = 0;
                setIsFirstSlide(true);
            }
        }
        // eslint-disable-next-line no-undef
        document.getElementById('slides-wrapper').scrollLeft = currentScrollXPosition.current;
    };

    const onViewSiteBtnClick = () => {
        // eslint-disable-next-line no-undef
        window.open(href, '_blank');
    };

    const isMobileDevice = isUserAgentSignallingMobile();

    return (
        <>
            <Overlay onClick={() => onClose()} />

            <Modal mobile={isMobileDevice}>
                <SliderWrapper mobile={isMobileDevice}>
                    {!isFirstSlide && (
                        <SliderControl type="previous" onClick={() => sliderControlClickHandler('previous')}>
                            <Arrow
                                src={sliderArrow}
                                alt="slider-control-arrow-previous"
                                type="previous"
                                tabIndex={0}
                                onKeyPress={() => sliderControlClickHandler('previous')}
                            />
                        </SliderControl>
                    )}

                    <Slides id="slides-wrapper">
                        {slides.map((slide, index) => {
                            return <Slide key={index} imageUrl={slide.imageUrl} mobileImageUrl={slide.mobileImageUrl} backupImageUrl={slide.backupImageUrl} />;
                        })}
                    </Slides>

                    {!isLastSlide && (
                        <SliderControl type="next" onClick={() => sliderControlClickHandler('next')}>
                            <Arrow
                                src={sliderArrow}
                                alt="slider-control-arrow-next"
                                type="next"
                                tabIndex={0}
                                onKeyPress={() => sliderControlClickHandler('next')}
                            />
                        </SliderControl>
                    )}
                </SliderWrapper>
                <InfoWrapper mobile={isMobileDevice}>
                    <InfoTitle>{title}</InfoTitle>
                    <InfoSubtitle>{subtitle}</InfoSubtitle>
                    <InfoDescription>{description}</InfoDescription>
                    <InfoFooter mobile={isMobileDevice}>
                        <ViewSiteButton onClick={onViewSiteBtnClick}>
                            <BtnText>
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    View site
                                </a>
                            </BtnText>
                        </ViewSiteButton>
                        <CloseWrapper onClick={() => onClose()}>
                            <Close src={sliderCloseIcon} alt="slider-control-close" tabIndex={0} onKeyPress={() => onClose()} />
                        </CloseWrapper>
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
            mobileImageUrl: PropTypes.string.isRequired
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired,
    href: PropTypes.string.isRequired
};

export default Slider;
