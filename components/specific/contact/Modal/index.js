import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { customMedia } from "../../../../styled-components/customMedia";
import ax from "../../../../styled-components/accessor";
import close from "../../../../images/icons/close.svg";

const ModalBackground = styled.div`
  display: none; /* Hidden by default */
  ${props =>
    props.visible &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `};
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: ${ax("overlay-color")};
`;

const ModalWindow = styled.div`
  background-color: ${ax("primary-color")};
  box-sizing: border-box;
  padding: 40px;
  width: 500px;
  height: 300px;
  ${customMedia.lessThan("desktop")`
    width: 335px;
    height: 230px;
    padding: 20px;
  `}
`;

const Close = styled.div`
  cursor: pointer;
  display: flex;
  color: ${ax("primary-color")};
  font-size: ${ax("extra-small-font-size")}rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: fit-content;
  height: 20px;
  border-radius: 30px;
`;

const Cross = styled.img`
  width: 20px;
  height: 20px;
`;

const ModalTitle = styled.div`
  font-family: "Raleway", sans-serif;
  margin: 20px auto 0;
  width: fit-content;
  color: black;
  font-size: 16px;
  font-weight: 600;
  line-height: 55px;
  ${customMedia.lessThan("desktop")`
    margin: 15px auto 0;
    ${props =>
      props.isFooter &&
      css`
        font-size: ${ax("extra-extra-large-font-size")}rem;
      `}
  `}
`;

const ModalContent = styled.div`
  font-family: "Raleway", sans-serif;
  margin: 15px auto 0;
  width: fit-content;
  max-width: 505px;
  color: black;
  font-size: 16px;
  font-weight: 300;
  line-height: 40px;
  text-align: center;
  ${customMedia.lessThan("desktop")`
    margin: 10px auto 0;
    line-height: 32px;
    max-width: 275px;
  `}
  p {
    ${customMedia.lessThan("desktop")`
      margin: 20px 0;
    `}
  }
`;

const ModalComponent = ({
  title,
  visible,
  onCloseHandler,
  children,
  isFooter
}) => {
  const backgroundClickHandler = event => {
    if (event.target.id === "modal_background_id") {
      onCloseHandler();
    }
  };

  return (
    <ModalBackground
      visible={visible}
      onClick={backgroundClickHandler}
      id="modal_background_id"
    >
      <ModalWindow>
        <Close
          onClick={onCloseHandler}
          tabIndex={0}
          onKeyPress={onCloseHandler}
        >
          <Cross src={close} alt="close-icon" />
        </Close>
        <ModalTitle isFooter={isFooter}>{title}</ModalTitle>
        <ModalContent>{children}</ModalContent>
      </ModalWindow>
    </ModalBackground>
  );
};

ModalComponent.defaultProps = {
  isFooter: false
};

ModalComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
  isFooter: PropTypes.bool
};

export default ModalComponent;
