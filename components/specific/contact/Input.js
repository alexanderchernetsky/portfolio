import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import React from "react";
import ax from "../../../styled-components/accessor";
import { customMedia } from "../../../styled-components/customMedia";
import ErrorLabel from "../../../styled-components/ErrorLabel";

const InputWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const ContactFormInput = styled.input`
  height: 65px;
  font-family: Aldrin, sans-serif;
  font-size: 13px;
  font-weight: 300;
  box-sizing: border-box;
  margin: 0;
  background-color: ${ax("input-bg")};
  border-radius: 0;
  border: none;
  padding-left: 25px;
  color: ${ax("primary-color")};

  ${props =>
    props.errorMessage &&
    css`
      margin-top: unset !important;
      border: 2px solid ${ax("highlight-color")};
    `}
  ${customMedia.lessThan("desktop")`
    width: 100%;
  `}
`;

const InputComponent = props => {
  const { errorMessage } = props;

  return (
    <InputWrapper>
      <ErrorLabel errorMessage={errorMessage}>{errorMessage}</ErrorLabel>
      <ContactFormInput {...props} />
    </InputWrapper>
  );
};

InputComponent.defaultProps = {
  className: "",
  placeholder: "input value",
  disabled: false,
  value: "",
  errorMessage: "Error"
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
