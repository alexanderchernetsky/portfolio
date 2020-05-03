import Trianglify from "trianglify";
import { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "../../components/Layout";

const AboutPageWrapper = styled.section`
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
  font-size: 20px;
  font-weight: 500;
`;

const About = () => {
  useEffect(() => {
    const pattern = Trianglify({
      height: window.innerHeight,
      width: window.innerWidth,
      cell_size: 40
    });

    document.getElementById("about-page").appendChild(pattern.canvas());
  }, []);
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
      <AboutPageWrapper id="about-page">
        <ContentWrapper>About</ContentWrapper>
      </AboutPageWrapper>
    </Layout>
  );
};

export default About;
