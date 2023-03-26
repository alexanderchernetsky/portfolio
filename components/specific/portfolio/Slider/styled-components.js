import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import ax from '../../../../styled-components/accessor';
import SLIDE_WIDTH from '../../../../constants/portfolio/slide';
import {customMedia} from '../../../../styled-components/customMedia';
import {Button} from '../ProjectCard';

const Overlay = styled.div`
    background-color: ${ax('slider-overlay-color')};
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
    width: ${SLIDE_WIDTH}px;
    position: fixed;
    z-index: 3;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    ${customMedia.lessThan('desktop')`
    width: 375px;
  `}
    ${props =>
        props.mobile &&
        css`
            width: unset !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            transform: unset;
        `};
`;

const SliderWrapper = styled.div`
    position: relative;
    width: ${SLIDE_WIDTH}px;
    height: 450px;
    display: flex;
    overflow-x: auto;
    ${customMedia.lessThan('desktop')`
    width: 375px;
    height: 250px;
  `}
    ${props =>
        props.mobile &&
        css`
            flex-direction: column;
        `};
`;

const SliderControl = styled.div`
    cursor: pointer;
    position: absolute;
    background-color: ${ax('overlay-color')};
    z-index: 1;
    left: 0;
    bottom: 0;
    width: 65px;
    height: 55px;
    background-color: ${ax('slider-controls-bg-color')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${props =>
        props.type === 'next' &&
        css`
            right: 0;
            left: unset;
        `} ${props =>
        props.type === 'previous' &&
        css`
            transform: rotate(180deg);
        `}
`;

SliderControl.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    children: PropTypes.node
};

const Arrow = styled.img`
    cursor: pointer;
    position: absolute;
    z-index: 1;
    width: 20px;
    height: 20px;
`;

const CloseWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
`;

const Close = styled.img`
    cursor: pointer;
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

    div {
        scroll-snap-align: start;
        flex-shrink: 0;
    }
`;

const InfoWrapper = styled.div`
    width: 100%;
    background-color: ${ax('primary-color')};
    padding: 35px 30px 25px;
    border-top: 3px solid ${ax('slider-border')};
    ${customMedia.lessThan('desktop')`
    width: 375px;
  `}
    ${props =>
        props.mobile &&
        css`
            display: flex;
            flex-direction: column;
            height: calc(100vh - 250px);
        `};
`;

const InfoTitle = styled.h3`
    font-size: 30px;
    font-family: 'Raleway', sans-serif;
    margin: 0 0 5px;
`;

const InfoSubtitle = styled.div`
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 500;
    color: ${ax('slider-info-subtitle')};
    border-bottom: 1px solid ${ax('overlay-color')};
    padding-bottom: 15px;
`;

const InfoDescription = styled.p`
    font-size: 15px;
    line-height: 18px;
    margin-top: 15px;
`;

const InfoFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
    ${props =>
        props.mobile &&
        css`
            margin-top: auto;
        `};
`;

const ViewSiteButton = styled(Button)`
    margin: 0;
    cursor: pointer;

    :hover {
        a {
            color: ${ax('primary-color')};
        }
    }
`;

const BtnText = styled.span`
    font-size: 14px;

    a {
        text-decoration: none;
        color: ${ax('card-title-color')};
    }
`;

export {
    BtnText,
    ViewSiteButton,
    InfoFooter,
    InfoDescription,
    InfoSubtitle,
    InfoTitle,
    InfoWrapper,
    Slides,
    Close,
    CloseWrapper,
    SliderWrapper,
    Modal,
    Arrow,
    Overlay,
    SliderControl
};
