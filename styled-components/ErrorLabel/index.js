import styled, {css} from 'styled-components';
import ax from '../accessor';
import {customMedia} from '../customMedia';

const ErrorLabel = styled.label`
    color: ${ax('highlight-color')};
    font-size: 13px;
    opacity: 0;
    transition: all 0.5s ease;
    ${props =>
        props.errorMessage &&
        css`
            opacity: 0.9;
        `};
    ${customMedia.lessThan('desktop')`
    font-size: ${ax('footer-extra-small-font-size')}rem;
    top: -11px;
  `}
`;

export default ErrorLabel;
