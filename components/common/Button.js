import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import ax from "../../styled-components/accessor";
import { customMedia } from "../../styled-components/customMedia";

function getStylesObjectForColorTheme(theme) {
  switch (theme) {
    case "green":
      return {
        circleBgColor: "green-button-bg-color",
        btnTextColor: "green-button-bg-color"
      };
    default:
      return {
        circleBgColor: "highlight-color",
        btnTextColor: "primary-color"
      };
  }
}

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
  ${customMedia.lessThan("mobile")`
    font-size: 14px;
  `};
  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: ${props =>
      ax(getStylesObjectForColorTheme(props.colorTheme).circleBgColor)};
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
    color: ${ax("highlight-color")};
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    text-transform: uppercase;
    a {
      color: ${props =>
        ax(getStylesObjectForColorTheme(props.colorTheme).btnTextColor)};
      font-weight: 400;
      text-decoration: none;
    }
    ${customMedia.lessThan("mobile")`
      line-height: 1.7;
    `}
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
      color: ${ax("primary-color")};
      font-weight: 400;
      a {
        color: ${ax("primary-color")};
        font-weight: 400;
      }
    }
  }
`;

const ButtonComponent = ({
  className,
  text,
  disabled,
  onClick,
  href,
  colorTheme
}) => {
  return (
    <Button
      className={className}
      disabled={disabled}
      onClick={onClick}
      colorTheme={colorTheme}
    >
      <span className="circle" aria-hidden="true">
        <span className="arrow icon" />
      </span>
      <span className="button-text">
        <Link href={href}>
          <a>{text}</a>
        </Link>
      </span>
    </Button>
  );
};

ButtonComponent.defaultProps = {
  className: "",
  text: "Button",
  disabled: false,
  onClick: () => {},
  href: "/",
  colorTheme: "pink"
};

ButtonComponent.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  colorTheme: PropTypes.oneOf(["pink", "green"])
};

export default ButtonComponent;
