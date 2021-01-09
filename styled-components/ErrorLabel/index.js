import styled, { css } from "styled-components";
import ax from "../accessor";
import { customMedia } from "../customMedia";

const ErrorLabel = styled.label`
  color: ${ax("error-label-color")};
  font-size: ${ax("extra-extra-small-font-size")}rem;
  ${customMedia.lessThan("desktop")`
    font-size: ${ax("footer-extra-small-font-size")}rem;
    top: -11px;
  `}
  
  ${props =>
    props.designType === "contact-form" &&
    css`
      position: absolute;
      top: -25px;
      left: 0;
      font-size: ${ax("small-font-size")}rem;
      margin-top: 5px;
      white-space: nowrap;
      ${customMedia.lessThan("desktop")`
      top: -20px;
    `}
    `}

  ${props =>
    (props.designType === "cv-form" || props.designType === "upload") &&
    css`
      position: absolute;
      top: -25px;
      left: -25px;
      font-size: ${ax("small-font-size")}rem;
      margin-left: 30px;
      margin-top: 5px;
      white-space: nowrap;
      ${customMedia.lessThan("desktop")`
        top: -20px;
        left: -25px;
      `}
    `}
`;

export default ErrorLabel;
