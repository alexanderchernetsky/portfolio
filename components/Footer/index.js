import React from "react";
import styled from "styled-components";
import ax from "../../styled-components/accessor";

const Footer = styled.footer`
  position: relative;
  height: 200px;
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

const InfoBlock = styled.p`
  display: flex;
  flex-direction: column;
`;

const Info = styled.span``;

const FooterComponent = () => (
  <Footer gradient="linear-gradient(45deg, #654ea3, #eaafc8)">
    <Content>
      <InfoBlock>
        <Info>Linkedin</Info>
        <Info>VK</Info>
        <Info>Instagram</Info>
        <Info>GitHub</Info>
      </InfoBlock>
    </Content>
  </Footer>
);

export default FooterComponent;
