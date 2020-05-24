import Head from "next/head";
import styled from "styled-components";
import Layout from "../../components/Layout";
import ax from "../../styled-components/accessor";
import blocks from "../../constants/blocks";
import Block from "../../components/specific/about/Block";
import { customMedia } from "../../styled-components/customMedia";
import alexander from "../../images/alexander-min.jpg";
import ButtonComponent from "../../components/Button";
import SkillBlock from "../../components/specific/about/SkillBlock";
import skills from "../../constants/skills";
import tools from "../../constants/tools";

const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${ax("primary-color")};
`;

const ContentWrapper = styled.main`
  width: 80%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ax("primary-color")};
  padding: 30px;
  margin-top: 60px;
  ${customMedia.lessThan("desktop")`
    padding: 20px 20px 80px;
    width: 90%;
  `};
`;

const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 34px;
  text-transform: uppercase;
  color: ${ax("page-title-color")};
  margin: 0 0 25px;
  ${customMedia.lessThan("tablet")`
    font-size: 24px;
    margin: 0 0 15px;
  `};
`;

const Stripe = styled.div`
  height: 4px;
  width: 70px;
  background-color: ${ax("page-title-color")};
  ${customMedia.lessThan("tablet")`
    width: 60px;
  `};
`;

const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  ${customMedia.lessThan("tablet")`
    margin-top: 10px;
  `};
`;

const MainInfoWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${customMedia.lessThan("tablet")`
    flex-direction: column;
  `};
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ax("primary-color");
  max-width: 590px;
  padding: 0 10px;
`;

const PhotoWrapper = styled.div`
  width: 300px;
  height: 300px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 45%, 75% 90%, 25% 90%, 0% 45%);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${ax("block-text-color")};
  margin: 0;
  text-align: center;
  ${customMedia.lessThan("tablet")`
    font-size: 18px;
    margin: 5px 0 0;
  `};
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  color: ${ax("block-text-color")};
  text-align: center;
  a {
    color: ${ax("link-color")};
    font-weight: 400;
    text-decoration: none;
  }
  ${customMedia.lessThan("tablet")`
    font-size: 14px;
  `};
`;

const Skills = styled(AboutSection)`
  ${customMedia.lessThan("tablet")`
    margin-top: 20px;
  `};
`;

const SkillsTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: ${ax("block-text-color")};
  margin: 0 auto;
  ${customMedia.lessThan("tablet")`
    font-size: 18px;
  `};
`;

const SkillsBlocksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About | Alexander Chernetsky</title>
        <meta
          name="description"
          content="Alexander Chernetsky - experienced frontend developer with a focus on React applications.
           Find out more about his expertise and experience within the IT industry."
        />
        <meta
          name="google-site-verification"
          content="B_oyNY7Nj-cESbBvN-hrxgz1HsbKpTGLSGL-_YWf-vY"
        />
      </Head>

      <AboutPageWrapper>
        <ContentWrapper>
          <PageTitleWrapper>
            <Heading>About</Heading>
            <Stripe />
          </PageTitleWrapper>
          <BlocksWrapper>
            {blocks.map((item, index) => {
              return (
                <Block
                  key={index}
                  src={item.src}
                  title={item.title}
                  text={item.text}
                />
              );
            })}
          </BlocksWrapper>
          <MainInfoWrapper>
            <AboutSection>
              <PhotoWrapper>
                <img
                  src={alexander}
                  alt="Alexander Chernetsky. Frontend developer from Grodno."
                />
              </PhotoWrapper>
              <Title>Alexander Chernetsky - Web Developer</Title>
              <Text>
                I&apos;m a frontend developer, who is passionate to creating
                stunning modern websites. I work for{" "}
                <a
                  href="https://www.itransition.com/"
                  target="_blank"
                  rel="external noopener noreferrer"
                >
                  Itransition
                </a>{" "}
                company in Grodno. I have worked on a multitude of web projects
                for a range of clients and have received numerous grateful
                testimonials from my clients. I look forward to speaking with
                you about your unique project, be it landing website or large
                and complicated web application.
              </Text>
              <ButtonComponent
                text="Contact me"
                href="/contact"
                colorTheme="green"
              />
            </AboutSection>
            <Skills>
              <SkillsTitle>Skills:</SkillsTitle>
              <SkillsBlocksWrapper>
                {skills.map((item, index) => {
                  return <SkillBlock title={item} key={index} />;
                })}
              </SkillsBlocksWrapper>
              <SkillsTitle>Tools:</SkillsTitle>
              <SkillsBlocksWrapper>
                {tools.map((item, index) => {
                  return <SkillBlock title={item} key={index} />;
                })}
              </SkillsBlocksWrapper>
            </Skills>
          </MainInfoWrapper>
        </ContentWrapper>
      </AboutPageWrapper>
    </Layout>
  );
};

export default About;
