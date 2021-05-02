import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import ax from "../../../styled-components/accessor";
import { customMedia } from "../../../styled-components/customMedia";

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

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-right: 40px;
  ${customMedia.lessThan("desktop")`
    margin-right: 0;
  `};
`;

const SocIconWrapper = styled.a`
  width: 40px;
  height: 40px;
  color: ${ax("primary-color")};
  cursor: pointer;
  :not(:last-of-type) {
    margin-right: 50px;
  }
  svg {
    width: 100% !important;
    height: 100%;
  }
  ${customMedia.greaterThan("desktop")`
    svg:hover {
      path {
        fill: ${props => getFillColorForIcon(props.icon)};
      }
    }
  `}
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

const SocialIconsComponent = () => {
  return (
    <IconsWrapper>
      <SocIconWrapper
        icon="linkedin"
        href="https://www.linkedin.com/in/alexander-chernetsky/"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </SocIconWrapper>
      <SocIconWrapper
        icon="github"
        href="https://github.com/alexanderchernetsky"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </SocIconWrapper>
      <SocIconWrapper
        icon="instagram"
        href="https://www.instagram.com/alexander_chernetsky/"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faInstagramSquare} />
        <InstaGradient />
      </SocIconWrapper>
    </IconsWrapper>
  );
};

export default SocialIconsComponent;
