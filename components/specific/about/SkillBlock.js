import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ax from "../../../styled-components/accessor";
import { customMedia } from "../../../styled-components/customMedia";

const SkillBlockWrapper = styled.div`
  padding: 0 20px;
  height: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: ${ax("green-button-bg-color")};
  ${customMedia.lessThan("tablet")`
    height: 24px;
    padding: 0 15px;
    margin: 5px;
  `};
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${ax("primary-color")};
  ${customMedia.lessThan("tablet")`
    font-size: 14px;
  `};
`;

const SkillBlock = ({ title }) => {
  return (
    <SkillBlockWrapper>
      <Title>{title}</Title>
    </SkillBlockWrapper>
  );
};

SkillBlock.propTypes = {
  title: PropTypes.string.isRequired
};

export default SkillBlock;
