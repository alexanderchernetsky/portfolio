import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';

const LayoutWrapper = styled.div`
    overflow: hidden;
    max-width: 1920px;
    margin: 0 auto;
`;

const MainContentWrapper = styled.main`
    flex: auto;
    min-width: 355px;
    max-width: 1920px;
    margin: 0 auto;
    background-image: linear-gradient(45deg, #654ea3, #eaafc8);
`;

const Layout = ({children, className}) => {
    return (
        <LayoutWrapper className={className}>
            <Header />
            <MainContentWrapper className="main-content-wrapper">{children}</MainContentWrapper>
        </LayoutWrapper>
    );
};

Layout.defaultProps = {
    className: ''
};

Layout.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Layout;
