import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import React from "react";
import ax from "../../../styled-components/accessor";
import { customMedia } from "../../../styled-components/customMedia";
import ErrorLabel from "../../../styled-components/ErrorLabel";

const ContactInput = styled.input`
  font-family: Aldrin, sans-serif;
  font-size: ${ax("small-font-size")}rem;
  box-sizing: border-box;
  height: 65px;
  margin: 0;
  background-color: ${ax("input-bg")};
  border-radius: 0;
  border: none;
  padding-left: 25px;
  color: ${ax("primary-color")};
  font-weight: 300;
  ::placeholder {
    color: ${ax("input-placeholder-color")};
  }
  ${props =>
    props.errorMessage &&
    css`
      border: 2px solid ${ax("error-label-color")};
      background-color: ${ax("error-input-background-color")};
      margin-top: unset !important;
    `}
  ${customMedia.lessThan("desktop")`
    width: 100%;
  `}
`;

const InputWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  ${customMedia.lessThan("desktop")`
    ${props =>
      props.designType === "white" &&
      css`
        max-width: 345px;
      `}
  `}
  ${props =>
    props.designType === "news-page" &&
    css`
      max-width: 621px;
      margin-left: 30px;
      ${customMedia.lessThan("desktop")`
        margin: 25px 0 0;
      `}
    `}
    ${props =>
      props.designType === "contact-form" &&
      css`
        max-width: 295px;
      `}
`;

const InputComponent = props => {
  const { errorMessage } = props;

  return (
    <InputWrapper>
      {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
      <ContactInput {...props} />
    </InputWrapper>
  );
};

InputComponent.defaultProps = {
  className: "",
  placeholder: "input value",
  disabled: false,
  value: "",
  errorMessage: false
};

InputComponent.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  type: PropTypes.string.isRequired
};

export default InputComponent;
