import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './images/Group 2 (1).png';

const Core = () => {
  const [activeHeader, setActiveHeader] = useState(null); 

  const handleClick = (header) => {
    setActiveHeader(header); 
  };

  return (
    <>
      <StartCore>
        <img src={Logo} alt="" />
        <ComeOn>
          <StyledH1 
            color={activeHeader === 'h1' ? 'red' : 'white'} 
            onClick={() => handleClick('h1')}
          >
            Наши менторы
          </StyledH1>
          <StyledH2 
            color={activeHeader === 'h2_1' ? 'red' : 'white'} 
            onClick={() => handleClick('h2_1')}
          >
            Заявки
          </StyledH2>
          <StyledH2 
            color={activeHeader === 'h2_2' ? 'red' : 'white'} 
            onClick={() => handleClick('h2_2')}
          >
            Наш офис
          </StyledH2>
        </ComeOn>
      </StartCore>
    </>
  );
};

export default Core;

const StartCore = styled.div`
  border: 1px solid black;
  width: 286px;
  height: 915px;
  border-radius: 30px;
  background-color: #041124;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  > img {
    margin-top: 60px;
  }
`;

const ComeOn = styled.div`
  width: 190px;
  height: 157px;
  flex-direction: column;
  align-items: center;
  margin-left: 42px;
  margin-top: 100px;
`;

const StyledH1 = styled.h1`
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  margin-left: -13px;
`;

const StyledH2 = styled.h2`
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  line-height: 28.98px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;