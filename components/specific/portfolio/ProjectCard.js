import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ax from "../../../styled-components/accessor";

const CardWrapper = styled.div`
  background-image: url(${props => props.imageUrl});
  width: 400px;
  height: 300px;
  cursor: pointer;
  position: relative;
  :hover {
    > div {
      opacity: 1;
    }
  }
`;

const Overlay = styled.div`
  transition: all 0.5s ease-out;
  opacity: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${ax("card-overlay-color")};
  z-index: 1;
`;

const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: ${ax("card-title-color")};
  font-size: 24px;
  margin: 60px 0 0;
`;

const Description = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: ${ax("highlight-color")};
  margin-top: 0;
`;

const Button = styled.div`
  box-sizing: border-box;
  font-size: 18px;
  color: ${ax("card-title-color")};
  padding: 0 30px;
  height: 42px;
  width: fit-content;
  border: 2px solid ${ax("highlight-color")};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 60px auto 0;
  transition: all 0.5s ease-out;
  :hover {
    background-color: ${ax("highlight-color")};
    color: ${ax("primary-color")};
  }
`;

const ProjectCard = ({ title, technologies, imageUrl }) => {
  return (
    <CardWrapper imageUrl={imageUrl}>
      <Overlay>
        <Title>{title}</Title>
        <Description>{technologies}</Description>
        <Button>Learn More</Button>
      </Overlay>
    </CardWrapper>
  );
};

ProjectCard.defaultProps = {
  title: "Project",
  technologies: "React"
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  technologies: PropTypes.string,
  imageUrl: PropTypes.string.isRequired
};

export default ProjectCard;
