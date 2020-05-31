import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ax from "../../../styled-components/accessor";
import { customMedia } from "../../../styled-components/customMedia";
import SocialIconsComponent from "../SocIcons";

const Header = styled.header`
  height: 60px;
  width: 100%;
  color: ${ax("primary-color")};
  position: fixed;
  z-index: 2;
  max-width: 1920px;
  background-color: ${ax("overlay-color")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${customMedia.lessThan("desktop")`
    justify-content: center;
  `};
`;

const MenuWrapper = styled.nav``;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  ${customMedia.lessThan("desktop")`
    padding-left: 0;
  `};
`;

const MenuItem = styled.li`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  ${customMedia.lessThan("mobile")`
    font-size: 14px;
    margin-right: 15px;
    :last-of-type {
      margin-right: 0;
    }
  `};
`;

const ItemWrapper = styled.span`
  text-align: center;
  margin: 0 auto;
  padding: 0;
  transition: all 0.2s ease-in-out;
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 0;
    height: 5px;
    margin: 5px 0 0;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    background-image: linear-gradient(45deg, #6303b1, #ff0099);
    left: 0;
  }
  :hover {
    &:before,
    &:after {
      width: 100%;
      opacity: 1;
    }
  }
  a {
    text-decoration: none;
    color: ${ax("primary-color")};
  }
`;

const SocIconsWrapper = styled.div`
  ${customMedia.lessThan("desktop")`
     display: none;  
  `}
`;

const headerMenuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" }
];

const HeaderComponent = () => (
  <Header>
    <MenuWrapper>
      <Menu>
        {headerMenuItems.map((item, index) => {
          return (
            <MenuItem key={index}>
              <ItemWrapper>
                <Link href={item.link}>
                  <a>{item.name}</a>
                </Link>
              </ItemWrapper>
            </MenuItem>
          );
        })}
      </Menu>
    </MenuWrapper>
    <SocIconsWrapper>
      <SocialIconsComponent />
    </SocIconsWrapper>
  </Header>
);

export default HeaderComponent;
