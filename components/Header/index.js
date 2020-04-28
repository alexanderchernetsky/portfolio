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
  margin-right: 20px;
  cursor: pointer;
`;

const HeaderComponent = () => (
  <Header>
    <MenuWrapper>
      <Menu>
        <MenuItem>About</MenuItem>
        <MenuItem>Portfolio</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </MenuWrapper>
  </Header>
);

export default HeaderComponent;
