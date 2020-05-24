import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ax from "../../../styled-components/accessor";
import { customMedia } from "../../../styled-components/customMedia";

const BlockWrapper = styled.div`
  width: 240px;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 10px 20px 10px;
  ${customMedia.lessThan("tablet")`
    width: 200px;
    height: 180px;
    margin: 10px;
  `};
  ${customMedia.lessThan("phone")`
    height: unset;
  `};
`;

const Image = styled.div`
  width: 120px;
  height: 100px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  ${customMedia.lessThan("tablet")`
    width: 100px;
    height: 80px;
  `};
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: ${ax("block-text-color")};
  margin: 10px 0 0;
  ${customMedia.lessThan("tablet")`
    font-size: 18px;
    margin: 5px 0 0;
  `};
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: ${ax("block-text-color")};
  text-align: center;
  margin: 5px 0 0;
  ${customMedia.lessThan("tablet")`
    font-size: 14px;
    margin: 3px 0 0;
  `};
`;

const Block = ({ title, text, src }) => {
  return (
    <BlockWrapper>
      <Image src={src} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </BlockWrapper>
  );
};

Block.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Block;
