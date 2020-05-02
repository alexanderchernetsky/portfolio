import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Layout from "../components/Layout";
import ax from "../styled-components/accessor";
import alexander from "../images/alexander.jpg";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const DiagonalBox = styled.div`
  position: relative;
  height: 450px;
  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: ${props => props.gradient};
    transform: skewY(-11deg);
  }
`;

const Content = styled.section`
  color: ${ax("primary-color")};
  font-size: 20px;
  max-width: ${props => props.size || 400}px;
  margin: 0 auto;
  position: relative;
  padding: 49px; // x = tan(angle)*width / 2
  display: flex;
  flex-direction: column;
`;

const PhotoWrapper = styled.figure`
  width: 200px;
  height: 200px;
  align-self: center;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 0;
`;

const InfoBlock = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Info = styled.span``;

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Frontend Dev | Alexander Chernetsky</title>
        <meta
          name="description"
          content="Alexander Chernetsky - a frontend web developer from Grodno, Belarus"
        />
      </Head>

      <HomePageWrapper>
        {/* first */}
        <DiagonalBox gradient="linear-gradient(45deg, #6303B1, #ff0099)">
          <Content size="500">
            <PhotoWrapper>
              <Photo src={alexander} alt="Alexander Chernetsky photo"/>
            </PhotoWrapper>
            <Title>
              Hello! I&apos;m Alexander, a frontend web developer based in
              Grodno, Belarus.
            </Title>
          </Content>
        </DiagonalBox>
        {/* second */}
        <DiagonalBox gradient="linear-gradient(45deg, #654ea3, #eaafc8)">
          <Content>
            <Subtitle>Programming skills:</Subtitle>
            <InfoBlock>
              <Info>React, React Hooks</Info>
              <Info>Javascript</Info>
              <Info>Next.js</Info>
              <Info>Redux, Redux-Saga</Info>
              <Info>Typescript</Info>
              <Info>Jest, Enzyme</Info>
              <Info>Bootstrap, Ant Design, Material-UI</Info>
              <Info>Jest, Enzyme</Info>
              <Info>CSS-in-JS (Styled Components)</Info>
              <Info>CSS, LESS, SASS, Stylus</Info>
              <Info>HTML</Info>
              <Info>Algorithms & Data Structures</Info>
            </InfoBlock>
          </Content>
        </DiagonalBox>
        {/* third */}
        <DiagonalBox gradient="linear-gradient(-135deg, #ff0084, #33001b);">
          <Content>
            <Subtitle>Tools:</Subtitle>
            <InfoBlock>
              <Info>Jira, Confluence</Info>
              <Info>Postman</Info>
              <Info>Swagger</Info>
              <Info>Webpack</Info>
              <Info>Npm, yarn</Info>
              <Info>GIT</Info>
              <Info>IDE WebStorm</Info>
              <Info>Github, Bitbucket, GitLab</Info>
              <Info>Adobe Photoshop</Info>
            </InfoBlock>
          </Content>
        </DiagonalBox>
      </HomePageWrapper>
    </Layout>
  );
};

export default Index;
