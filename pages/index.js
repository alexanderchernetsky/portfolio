import React, { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import Trianglify from "trianglify";
import Layout from "../components/Layout";
import alex from "../images/alex.jpg";
import ButtonComponent from "../components/Button";
import ax from "../styled-components/accessor";
import { customMedia } from "../styled-components/customMedia";

const HomePageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ContentWrapper = styled.div`
  position: absolute;
  max-width: 500px;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-radius: 5px;
  border: 2px solid ${ax("primary-color")};
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  color: ${ax("secondary-color")};
  ${customMedia.lessThan("mobile")`
    font-size: 24px;
  `};
`;

const Index = () => {
  useEffect(() => {
    const pattern = Trianglify({
      height: window.innerHeight,
      width: window.innerWidth,
      cell_size: 40
    });

    document.getElementById("home-page").appendChild(pattern.canvas());
  }, []);

  return (
    <Layout>
      <Head>
        <title>Frontend Dev | Alexander Chernetsky</title>
        <meta
          name="description"
          content="Alexander Chernetsky - a frontend web developer from Grodno, Belarus"
        />
        <meta
          name="google-site-verification"
          content="B_oyNY7Nj-cESbBvN-hrxgz1HsbKpTGLSGL-_YWf-vY"
        />
      </Head>

      <HomePageWrapper id="home-page">
        <ContentWrapper>
          <PhotoWrapper>
            <Photo src={alex} alt="Alexander Chernetsky photo" />
          </PhotoWrapper>
          <Title>
            Hello! I&apos;m Alexander, a frontend web developer based in Grodno,
            Belarus.
          </Title>
          <ButtonComponent text="View my work" />
        </ContentWrapper>
      </HomePageWrapper>
    </Layout>
  );
};

export default Index;
