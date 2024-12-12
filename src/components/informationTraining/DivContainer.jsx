import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>

const DivContainer = ({ texts }) => {
  const half = Math.ceil(texts.length / 2);
  const firstHalf = texts.slice(0, half);
  const secondHalf = texts.slice(half);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <ParentContainerStyled>
      <h2>Как проходит обучение</h2>
      <TopContainerStyled>
        {firstHalf.map((text, index) => (
          <AnimatedDiv key={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={animationVariants}>
            <NumberStyled>{index + 1}</NumberStyled>
            <h3>Занятия</h3>
            <TextContainerStyled>
              <span>{text}</span>
            </TextContainerStyled>
          </AnimatedDiv>
        ))}
      </TopContainerStyled>
      <BottomContainerStyled>
        {secondHalf.map((text, index) => (
          <AnimatedDiv key={index + half} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={animationVariants}>
            <NumberStyled>{index + half + 1}</NumberStyled>
            <h3>Занятия</h3>
            <TextContainerStyled>
              <span>{text}</span>
            </TextContainerStyled>
          </AnimatedDiv>
        ))}
      </BottomContainerStyled>
    </ParentContainerStyled>
  );
};

export default DivContainer;

const ParentContainerStyled = styled.div`
  width: 1116px;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > h2 {
    color: white;
    display: flex;
    align-items: flex-start;
  }
`;

const TopContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const BottomContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const AnimatedDiv = styled(motion.div)`
  border-radius: 16px;
  border: none;
  width: 345px;
  height: 169px;
  border-radius: 16 px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgba(57, 144, 249, 0.135) ;
  > h3 {
    color: white;
    margin-left: -235px;
  }
`;

const NumberStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 72px;
  color: rgba(57, 144, 249, 0.135);
  font-weight: bold;
  z-index: 1;
`;

const TextContainerStyled = styled.div`
  width: 207px;
  height: 99px;
  color: white;
  left: 20px;
  position: relative;
  padding: 10px;
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
  z-index: 2;
  overflow: auto;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
`;
