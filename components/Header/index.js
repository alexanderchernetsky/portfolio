import React from "react";
import styled from "styled-components";
import ax from "../../styled-components/accessor";

const Header = styled.header`
  height: 100px;
  width: 100%;
  color: ${ax("primary-color")};
  position: fixed;
  z-index: 2;
`;

const MenuWrapper = styled.nav``;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.li`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
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
`;

const headerMenuItems = [
  { name: "Home" },
  { name: "Portfolio" },
  { name: "Blog" },
  { name: "Contact" }
];

const HeaderComponent = () => (
  <Header>
    <MenuWrapper>
      <Menu>
        {headerMenuItems.map((item, index) => {
          return (
            <MenuItem key={index}>
              <ItemWrapper>{item.name}</ItemWrapper>
            </MenuItem>
          );
        })}
      </Menu>
    </MenuWrapper>
  </Header>
);

export default HeaderComponent;
