import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import styled, {css} from 'styled-components';
import Link from 'next/link';
import ax from '../../../styled-components/accessor';
import {customMedia} from '../../../styled-components/customMedia';

const Header = styled.header`
    ${props =>
        props.isHomePage &&
        css`
            display: none !important;
        `};
    height: 60px;
    width: 100%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    color: ${ax('primary-color')};
    z-index: 2;
    max-width: 1920px;
    background-color: ${ax('header-bg')};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s ease-out;
    border-bottom: 3px solid ${ax('hover-color')};
    ${customMedia.lessThan('desktop')`
    justify-content: center;
  `};
`;

const MenuWrapper = styled.nav``;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    ${customMedia.lessThan('desktop')`
    padding-left: 0;
  `};
`;

const MenuItem = styled.li`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    ${customMedia.lessThan('mobile')`
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
        content: '';
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

    ${props =>
        props.activePage &&
        css`
            &:before,
            &:after {
                width: 100%;
                opacity: 1;
            }
        `};

    a {
        text-decoration: none;
        color: ${ax('primary-color')};
    }
`;

const headerMenuItems = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Portfolio', link: '/portfolio'},
    {name: 'Contact', link: '/contact'}
];

const HEADER_HEIGHT = 60;

const HeaderComponent = () => {
    const router = useRouter();
    const activePage = router.pathname.substring(1);

    let lastScrollTop = 0; // last scroll position

    // the handler below hides and shows header on scroll down and up respectively
    const onScrollHandler = () => {
        // eslint-disable-next-line no-undef
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop && st > HEADER_HEIGHT) {
            // eslint-disable-next-line no-undef
            document.getElementById('header').style.transform = 'translateY(-100%) translateX(-50%)';
        } else {
            // eslint-disable-next-line no-undef
            document.getElementById('header').style.transform = 'translateY(0) translateX(-50%)';
        }
        lastScrollTop = st <= 0 ? 0 : st; // for Mobile or negative scrolling
    };

    useEffect(() => {
        // eslint-disable-next-line no-undef
        window.addEventListener('scroll', () => onScrollHandler());
        return function cleanup() {
            // eslint-disable-next-line no-undef
            window.removeEventListener('scroll', () => onScrollHandler());
        };
    }, []);

    const isHomePage = activePage === '';

    return (
        <Header id="header" isHomePage={isHomePage}>
            <MenuWrapper>
                <Menu>
                    {headerMenuItems.map((item, index) => {
                        const isActivePage = item.name.toLowerCase() === activePage;
                        const isActiveHomePage = item.name === 'Home' && activePage === '';

                        return (
                            <MenuItem key={index}>
                                <ItemWrapper activePage={isActivePage || isActiveHomePage}>
                                    <Link href={item.link}>
                                        <a>{item.name}</a>
                                    </Link>
                                </ItemWrapper>
                            </MenuItem>
                        );
                    })}
                </Menu>
            </MenuWrapper>
        </Header>
    );
};

export default HeaderComponent;
