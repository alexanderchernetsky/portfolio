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

const PortfolioPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${ax("portfolio-bg-color")};
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  width: 1200px;
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
  margin-top: 90px;
  ${customMedia.lessThan("mediumScreen")`
    justify-content: center;
    padding: 0 30px;
  `};
`;

const About = () => {
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
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={project.title}
                  technologies={project.technologies}
                  imageUrl={project.image}
                />
              );
            })}
          </Cards>
        </ContentWrapper>
      </PortfolioPageWrapper>
    </Layout>
  );
};

export default About;
