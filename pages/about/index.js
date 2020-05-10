import Trianglify from "trianglify";
import { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "../../components/Layout";
import ax from "../../styled-components/accessor";
import fast from "../../images/blocks/fast.jpg";
import responsive from "../../images/blocks/responsive.jpg";
import intuitive from "../../images/blocks/intuitive.jpg";
import dynamic from "../../images/blocks/dynamic.jpg";
import Block from "../../components/specific/about/Block";
import { customMedia } from "../../styled-components/customMedia";

const AboutPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ContentWrapper = styled.main`
  position: absolute;
  width: 80%;
  max-width: 1440px;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ax("primary-color")};
  padding: 30px;
  ${customMedia.lessThan("tablet")`
    padding: 20px;
    top: 50%;
    height: 80%;
    overflow-y: scroll;
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

const blocks = [
  {
    src: `${fast}`,
    title: "Fast",
    text: "Fast load times and absence of bugs are my highest priority."
  },
  {
    src: `${responsive}`,
    title: "Responsive",
    text:
      "My layouts work immaculately on any device, either desktop or mobile device."
  },
  {
    src: `${intuitive}`,
    title: "Intuitive",
    text: "Preference for intuitive UI/UX."
  },
  {
    src: `${dynamic}`,
    title: "Dynamic",
    text: "Websites don't have to be static. I like making pages dynamic."
  }
];

const About = () => {
  useEffect(() => {
    const pattern = Trianglify({
      height: window.innerHeight,
      width: window.innerWidth,
      cell_size: 40,
      x_colors: "Greens"
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
        </ContentWrapper>
      </AboutPageWrapper>
    </Layout>
  );
};

export default About;
