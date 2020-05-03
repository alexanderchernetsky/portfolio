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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: ${ax("overlay-color")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  color: ${ax("primary-color")};
  font-size: 20px;
  max-width: 200px;
  margin: 0 auto;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const SocIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  :not(:last-of-type) {
    margin-right: 50px;
  }
  svg {
    width: 100% !important;
    height: 100%;
  }
  svg:hover {
    path {
      fill: ${props => getFillColorForIcon(props.icon)};
    }
  }
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

const FooterComponent = () => {
  const socIconClickHandler = link => {
    window.open(link, "_ blank");
  };
  return (
    <Footer gradient="linear-gradient(45deg, #654ea3, #eaafc8)">
      <Content>
        <IconsWrapper>
          <SocIconWrapper
            icon="linkedin"
            onClick={() =>
              socIconClickHandler(
                "https://www.linkedin.com/in/alexander-chernetsky/"
              )
            }
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocIconWrapper>
          <SocIconWrapper
            icon="github"
            onClick={() =>
              socIconClickHandler("https://github.com/alexanderchernetsky")
            }
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </SocIconWrapper>
          <SocIconWrapper icon="instagram">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              onClick={() =>
                socIconClickHandler(
                  "https://www.instagram.com/alexander_chernetsky/"
                )
              }
            />
            <InstaGradient />
          </SocIconWrapper>
        </IconsWrapper>
      </Content>
    </Footer>
  );
};

export default FooterComponent;
