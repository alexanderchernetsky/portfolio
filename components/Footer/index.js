import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faGithubSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import ax from "../../styled-components/accessor";

function getFillColorForIcon(iconName) {
  switch (iconName) {
    case "linkedin":
      return "#0077B7";
    case "instagram":
      return "url(#rg)";
    case "github":
      return "#1B1F23";
    default:
      return "white";
  }
}

const Footer = styled.footer`
  position: relative;
  height: 450px;
  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: ${props => props.gradient};
    transform: skewY(-11deg);
  }
`;

const Content = styled.div`
  color: ${ax("primary-color")};
  font-size: 20px;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  padding: 49px; // x = tan(angle)*width / 2
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 175px;
  justify-content: flex-start;
`;

const SocIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-right: 50px;
  svg {
    width: 100% !important;
    height: 100%;
  }
  :hover {
    svg {
      path {
        fill: ${props => getFillColorForIcon(props.icon)};
      }
    }
  }
  transition: all 0.5s ease-out;
`;

const InstaGradient = () => {
  return (
    <svg width="0" height="0">
      <radialGradient id="rg" r="150%" cx="30%" cy="107%">
        <stop stopColor="#fdf497" offset="0" />
        <stop stopColor="#fdf497" offset="0.05" />
        <stop stopColor="#fd5949" offset="0.45" />
        <stop stopColor="#d6249f" offset="0.6" />
        <stop stopColor="#285AEB" offset="0.9" />
      </radialGradient>
    </svg>
  );
};

const FooterComponent = () => (
  <Footer gradient="linear-gradient(45deg, #654ea3, #eaafc8)">
    <Content>
      <IconsWrapper>
        <SocIconWrapper icon="linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocIconWrapper>
        <SocIconWrapper icon="github">
          <FontAwesomeIcon icon={faGithubSquare} />
        </SocIconWrapper>
        <SocIconWrapper icon="instagram">
          <FontAwesomeIcon icon={faInstagramSquare} />
          <InstaGradient />
        </SocIconWrapper>
      </IconsWrapper>
    </Content>
  </Footer>
);

export default FooterComponent;
