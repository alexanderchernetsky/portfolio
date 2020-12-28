import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import ax from "../../styled-components/accessor";
import { customMedia } from "../../styled-components/customMedia";
import {
  Heading,
  PageTitleWrapper,
  Stripe
} from "../../styled-components/pageTitle";
import projects from "../../constants/projects";
import ProjectCard from "../../components/specific/portfolio/ProjectCard";
import Slider from "../../components/specific/portfolio/Slider/Slider";
import equitecitInfo from "../../constants/equitec-it";

const PortfolioPageWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${ax("portfolio-bg-color")};
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 1170px; // 390*3
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  padding-top: 30px;
  ${customMedia.lessThan("desktop")`
    padding: 20px 20px 80px;
    width: 90%;
  `};
  ${customMedia.lessThan("mobile")`
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
  ${customMedia.lessThan("mediumScreen")`
    justify-content: center;
    padding: 0 30px;
  `};
`;

const Portfolio = () => {
  const [isSliderVisible, toggleSliderVisibility] = useState(false);
  const [currentProject, setCurrentProject] = useState("default");

  const onLearnMoreClickHandler = slug => {
    setCurrentProject(slug);
    toggleSliderVisibility(true);
  };

  const onSliderCloseBtnClick = () => {
    toggleSliderVisibility(false);
  };

  const getProject = slug => {
    switch (slug) {
      case "equitec-it": {
        return equitecitInfo;
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
        <meta
          name="description"
          content="Alexander Chernetsky portfolio. View photo of completed projects."
        />
        <meta
          name="google-site-verification"
          content="B_oyNY7Nj-cESbBvN-hrxgz1HsbKpTGLSGL-_YWf-vY"
        />
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
