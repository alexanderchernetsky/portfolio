import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import ax from "../../../styled-components/accessor";
import { customMedia } from "../../../styled-components/customMedia";
import ErrorLabel from "../../../styled-components/ErrorLabel";

const TextareaWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

const ContactFormTextarea = styled.textarea`
  height: 130px;
  font-family: Aldrin, sans-serif;
  font-size: 13px;
  font-weight: 300;
  -webkit-appearance: none;
  box-sizing: border-box;
  margin: 0;
  background-color: ${ax("input-bg")};
  border-radius: 0;
  border: none;
  max-width: unset;
  padding: 19px 19px 0 25px;
  color: ${ax("primary-color")};
  resize: none;
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

const TextareaComponent = props => {
  const { errorMessage } = props;

  return (
    <TextareaWrapper>
      <ErrorLabel errorMessage={errorMessage}>{errorMessage}</ErrorLabel>
      <ContactFormTextarea {...props} />
    </TextareaWrapper>
  );
};

TextareaComponent.defaultProps = {
  placeholder: "Please input your message.",
  value: "",
  errorMessage: "Error"
};

TextareaComponent.propTypes = {
  errorMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextareaComponent;
