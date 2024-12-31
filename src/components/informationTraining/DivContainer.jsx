import React from 'react';
import styled from 'styled-components';

const DivContainer = () => {
  const data = [
    { id: 1, title: 'Занятия', description: 'занятия проходят 6 раз в неделю 3 дня уроки 3 дня практика' },
    { id: 2, title: 'Занятия', description: 'занятия проходят 6 раз в неделю 3 дня уроки 3 дня практика' },
    { id: 3, title: 'Занятия', description: 'занятия проходят 6 раз в неделю 3 дня уроки 3 дня практика' },
    { id: 4, title: 'Занятия', description: 'занятия проходят 6 раз в неделю 3 дня уроки 3 дня практика' },
    { id: 5, title: 'Занятия', description: 'занятия проходят 6 раз в неделю 3 дня уроки 3 дня практика' },
    { id: 6, title: 'Занятия', description: 'занятия проходят 6 раз в неделю 3 дня уроки 3 дня практика' },
  ];

  return (
    <Wrapper>
      <Title>Как проходит обучение</Title>
      <DivContainerWrapper>
        {data.map(({ id, title, description }) => (
          <Card key={id}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>{id}</div>
          </Card>
        ))}
      </DivContainerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1116px;
  margin: auto;

  @media (max-width: 834px) {
    width: 90%;
  }

  @media (max-width: 375px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 834px) {
    font-size: 30px;
    text-align: center;
  }

  @media (max-width: 375px) {
    font-size: 24px;
    text-align: center;
  }
`;

const DivContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #3990F922;
  color: #ffffff;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding: 20px;
  height: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgb(255, 255, 255);
  }

  > h1 {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 10px;
    transition: color 0.3s ease;

    @media (max-width: 834px) {
      font-size: 16px;
    }

    @media (max-width: 375px) {
      font-size: 14px;
    }
  }

  &:hover > h1 {
    color: #4a90e2;
  }

  > p {
    width: 207px;
    height: 120px;
    font-size: 14px;
    line-height: 1.5;
    color: white;
    text-align: left;
    overflow-y: auto; 
    padding-right: 5px; 

    @media (max-width: 834px) {
      font-size: 12px;
      width: 100%;
    }

    @media (max-width: 375px) {
      font-size: 10px;
      width: 100%;
    }
  }

  > div {
    position: absolute;
    font-size: 180px;
    font-weight: bold;
    color: rgba(74, 144, 226, 0.2); 
    bottom: -35px;
    right: 10px;
    transition: color 0.3s ease;

    @media (max-width: 834px) {
      font-size: 140px;
      bottom: -25px;
    }

    @media (max-width: 375px) {
      font-size: 100px;
      bottom: -25px;
    }
  }

  &:hover > div {
    color: rgba(74, 144, 226, 0.4);
  }
`;

export default DivContainer;
