import React from "react";
import styled from "styled-components";
import ax from "../../../styled-components/accessor";
import { customMedia } from "../../../styled-components/customMedia";
import SocialIconsComponent from "../SocIcons";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${ax("overlay-color")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: none;
  ${customMedia.lessThan("desktop")`
    display: flex;
  `}
`;

const FooterComponent = () => {
  return (
    <Footer>
      <SocialIconsComponent />
    </Footer>
  );
};

export default FooterComponent;
