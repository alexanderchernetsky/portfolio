import React, {useState} from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../../components/common/Layout';
import ax from '../../styled-components/accessor';
import {customMedia} from '../../styled-components/customMedia';
import {Heading, PageTitleWrapper, Stripe} from '../../styled-components/PageTitle';
import projects from '../../constants/portfolio/projects';
import ProjectCard from '../../components/specific/portfolio/ProjectCard';
import Slider from '../../components/specific/portfolio/Slider/Slider';
import equitecitInfo from '../../constants/portfolio/equitec-it';
import isUserAgentSignallingMobile from '../../utils/isUserAgentSignallingMobile';
import storytrekInfo from '../../constants/portfolio/storytrek';
import ergInfo from '../../constants/portfolio/erg';
import totepoolInfo from '../../constants/portfolio/totepool';
import equitecInfo from '../../constants/portfolio/equitec';

const PortfolioPageWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${ax('portfolio-bg-color')};
    min-height: 100vh;
`;

const ContentWrapper = styled.div`
    max-width: 1170px; // 390*3
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    padding: 30px 0 60px;
    ${customMedia.lessThan('desktop')`
    padding: 20px 20px 80px;
    width: 90%;
  `};
    ${customMedia.lessThan('mobile')`
    padding: 10px 10px 80px;
  `};
`;

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 80px;
    ${customMedia.lessThan('mediumScreen')`
        justify-content: center;
        padding: 0 30px;
    `};
    ${customMedia.lessThan('desktop')`
        max-width: 435px;
    `};
    ${customMedia.lessThan('tablet')`
        margin-top: 20px;
        padding: 0;
    `};
`;

const Portfolio = () => {
    const [isSliderVisible, toggleSliderVisibility] = useState(false);
    const [currentProject, setCurrentProject] = useState('default');

    const isMobileDevice = isUserAgentSignallingMobile();

    const onLearnMoreClickHandler = slug => {
        // eslint-disable-next-line no-undef
        const {scrollY} = window;
        setCurrentProject(slug);
        toggleSliderVisibility(true);
        if (isMobileDevice) {
            // When the modal is shown, we want a fixed body to disable page scrolling
            // eslint-disable-next-line no-undef
            document.body.style.position = 'fixed';
            // eslint-disable-next-line no-undef
            document.body.style.top = `-${scrollY}px`;
        }
    };

    const onSliderCloseBtnClick = () => {
        toggleSliderVisibility(false);
        if (isMobileDevice) {
            // When the modal is hidden we need to restore previous scroll position
            // eslint-disable-next-line no-undef
            const scrollY = document.body.style.top;
            // eslint-disable-next-line no-undef
            document.body.style.position = '';
            // eslint-disable-next-line no-undef
            document.body.style.top = '';
            // eslint-disable-next-line no-undef
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    };

    const getProject = slug => {
        switch (slug) {
            case 'equitec-it': {
                return equitecitInfo;
            }
            case 'storytrek': {
                return storytrekInfo;
            }
            case 'erg': {
                return ergInfo;
            }
            case 'equitec': {
                return equitecInfo;
            }
            case 'totepool': {
                return totepoolInfo;
            }
            default:
                return equitecitInfo;
        }
    };

    const project = getProject(currentProject);

    return (
        <Layout>
            <Head>
                <title>Portfolio | Alexander Chernetsky</title>
                <meta name="description" content="Alexander Chernetsky portfolio. View photo of completed projects." />
                <meta name="google-site-verification" content="B_oyNY7Nj-cESbBvN-hrxgz1HsbKpTGLSGL-_YWf-vY" />
            </Head>

            <PortfolioPageWrapper>
                <ContentWrapper>
                    <PageTitleWrapper>
                        <Heading>Projects</Heading>
                        <Stripe />
                    </PageTitleWrapper>

                    <Cards>
                        {projects.map((item, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    title={item.title}
                                    slug={item.slug}
                                    technologies={item.technologies}
                                    imageUrl={item.image}
                                    onClickHandler={() => onLearnMoreClickHandler(item.slug)}
                                    lowQualityImgUrl={item.lowQualityImage}
                                />
                            );
                        })}
                    </Cards>
                    {/* slider */}
                    {isSliderVisible && (
                        <Slider
                            slides={project.slides}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            onClose={onSliderCloseBtnClick}
                            href={project.href}
                        />
                    )}
                </ContentWrapper>
            </PortfolioPageWrapper>
        </Layout>
    );
};

export default Portfolio;
