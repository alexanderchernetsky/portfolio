import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const LayoutWrapper = styled.div`
  overflow: hidden;
`;

const MainContentWrapper = styled.main`
  flex: auto;
  min-width: 355px;
  max-width: 1920px;
  margin: 0 auto;
  background-image: linear-gradient(45deg, #654ea3, #eaafc8);
`;

const Layout = ({ children, className }) => {
  return (
    <LayoutWrapper className={className}>
      <Header />
      <MainContentWrapper className="main-content-wrapper">
        {children}
      </MainContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
