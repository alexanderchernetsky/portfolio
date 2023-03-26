import styled from 'styled-components';
import ax from '../accessor';
import {customMedia} from '../customMedia';

const PageTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.h1`
    font-size: 34px;
    text-transform: uppercase;
    color: ${props => (props.bright ? ax('contact-page-title') : ax('page-title-color'))};
    margin: 0 0 25px;
    ${customMedia.lessThan('tablet')`
    font-size: 24px;
    margin: 0 0 15px;
  `};
`;

const Stripe = styled.div`
    height: 4px;
    width: 70px;
    background-color: ${props => (props.bright ? ax('contact-page-title') : ax('page-title-color'))};
    ${customMedia.lessThan('tablet')`
    width: 60px;
  `};
`;

export {Heading, Stripe, PageTitleWrapper};
