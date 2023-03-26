import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';
import Trianglify from 'trianglify';
import Layout from '../components/common/Layout';
import ButtonComponent from '../components/common/Button';
import ax from '../styled-components/accessor';
import {customMedia} from '../styled-components/customMedia';

const HomePageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const ContentWrapper = styled.div`
    position: absolute;
    width: 600px;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    ${customMedia.lessThan('tablet')`
    width: 360px;
  `};
`;

const Title = styled.h1`
    font-size: 38px;
    font-weight: 300;
    margin: 0;
    text-align: center;
    color: ${ax('primary-color')};
    ${customMedia.lessThan('tablet')`
    font-size: 23px;
    padding: 0 5px;
  `};
`;

const FullName = styled.span`
    color: ${ax('highlight-color')};
    font-weight: 400;
`;

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const HomePage = () => {
    const router = useRouter();

    useEffect(() => {
        const pattern = Trianglify({
            // eslint-disable-next-line no-undef
            height: window.innerHeight,
            // eslint-disable-next-line no-undef
            width: window.innerWidth,
            cell_size: 40,
            x_colors: 'Greys'
        });

        // eslint-disable-next-line no-undef
        document.getElementById('home-page').appendChild(pattern.canvas());
    }, []);

    const onBtnClickHandler = () => {
        router.push('/portfolio');
    };

    return (
        <Layout>
            <Head>
                <title>Frontend Developer | Alexander Chernetsky</title>
                <meta name="description" content="Alexander Chernetsky - a frontend web developer from Grodno, Belarus" />
                <meta name="google-site-verification" content="B_oyNY7Nj-cESbBvN-hrxgz1HsbKpTGLSGL-_YWf-vY" />
            </Head>

            <HomePageWrapper id="home-page">
                <ContentWrapper>
                    <Title>
                        Hello! I&apos;m <FullName>Alex Chernetsky</FullName>,
                        <br /> a frontend web developer based in Manchester, UK.
                    </Title>
                    <ButtonWrapper>
                        <ButtonComponent text="View my work" href="/portfolio" onClick={onBtnClickHandler} />
                    </ButtonWrapper>
                </ContentWrapper>
            </HomePageWrapper>
        </Layout>
    );
};

export default HomePage;
