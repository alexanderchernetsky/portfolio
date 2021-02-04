import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ax from "../../../../styled-components/accessor";

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ax("icon-bg")};
  cursor: pointer;
  height: 55px;
  width: 55px;
  margin: 0 15px;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: background 0.3s, color 0.3s, transform 0.3s;
  &&:hover {
    background: ${ax("hover-color")};
    transform: scale(0.9);
  }
`;

const Icon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const Link = styled.a``;

const SocIconComponent = ({ iconSrc, iconName, linkTo }) => {
  return (
    <>
      <Link href={linkTo} target="_blank">
        <IconWrapper>
          <Icon src={iconSrc} alt={iconName} />
        </IconWrapper>
      </Link>
    </>
  );
};

SocIconComponent.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
};

export default SocIconComponent;
