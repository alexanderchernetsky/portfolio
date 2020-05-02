import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  margin-top: 10px;
  align-self: center;
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: 18px;
  font-family: inherit;
  width: 13rem;
  height: auto;
  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
    .icon {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      background: white;
      &.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        left: 0.625rem;
        width: 1.125rem;
        height: 0.125rem;
        background: none;
        &::before {
          position: absolute;
          content: "";
          top: -0.3rem;
          right: 0.0625rem;
          width: 0.625rem;
          height: 0.625rem;
          border-top: 0.125rem solid #fff;
          border-right: 0.125rem solid #fff;
          transform: rotate(45deg);
        }
      }
    }
  }
  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }
}
&:hover {
  .circle {
    width: 100%;
    .icon {
      &.arrow {
        background: white;
        transform: translate(1rem, 0);
      }
    }
  }
  .button-text {
    color: white;
    font-weight: 500;
  }
`;

const ButtonComponent = ({ className, text, disabled, onClick }) => {
  return (
    <Button className={className} disabled={disabled} onClick={onClick}>
      <span className="circle" aria-hidden="true">
        <span className="arrow icon" />
      </span>
      <span className="button-text">{text}</span>
    </Button>
  );
};

ButtonComponent.defaultProps = {
  className: "",
  text: "Button",
  disabled: false,
  onClick: () => {}
};

ButtonComponent.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default ButtonComponent;
