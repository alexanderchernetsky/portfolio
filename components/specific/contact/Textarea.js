import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import ax from "../../../styled-components/accessor";
import { customMedia } from "../../../styled-components/customMedia";
import ErrorLabel from "../../../styled-components/ErrorLabel";

const TextareaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ContactFormTextarea = styled.textarea`
  height: 130px;
  font-family: Aldrin, sans-serif;
  -webkit-appearance: none;
  font-weight: 300;
  font-size: ${ax("small-font-size")}rem;
  box-sizing: border-box;
  background-color: ${ax("input-bg")};
  border-radius: 0;
  border: none;
  max-width: unset;
  padding: 19px 0 0 25px;
  margin: 0;
  color: ${ax("primary-color")};
  resize: none;
  ::placeholder {
    color: ${ax("input-placeholder-color")};
  }
  ${props =>
    props.errorMessage &&
    css`
      margin-top: unset !important;
      border: 2px solid ${ax("error-label-color")};
      background-color: ${ax("error-input-background-color")};
    `}
  ${customMedia.lessThan("desktop")`
    width: 100%;
  `}
`;

const TextareaComponent = props => {
  const { errorMessage } = props;
  return (
    <TextareaWrapper>
      {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
      <ContactFormTextarea {...props} />
    </TextareaWrapper>
  );
};

TextareaComponent.defaultProps = {
  placeholder: "Please input your message.",
  value: "",
  errorMessage: false
};

TextareaComponent.propTypes = {
  errorMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextareaComponent;
