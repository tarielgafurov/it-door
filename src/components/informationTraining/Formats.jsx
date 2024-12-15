import React from 'react';
import { HiStatusOnline } from "react-icons/hi";
import { HiStatusOffline } from "react-icons/hi";
import styled from 'styled-components';
import { motion } from 'framer-motion';
<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>

const Formats = () => {
  const formats = [
    { 
      icon: <HiStatusOffline />, 
      title: 'Оффлайн', 
      description: 'Посещение занятий в аудитории, общение с однокурсниками и возможность задать свои вопросы лично преподавателю' 
    },
    { 
      icon: <HiStatusOnline />, 
      title: 'Онлайн', 
      description: 'Онлайн-обучение идет параллельно с офлайн и можно не бояться затянуть учебу на неопределенный срок' 
    },
  ];

  return (
    <ParentStyled as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} >
      <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}transition={{ duration: 0.5 }}>Форматы обучения</motion.h1>
      <MotherStyled>
        {formats.map((format, index) => (
          <BrotherStyled as={motion.div} key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} >
            <SisterStyled>
              {format.icon}
              <span>{format.title}</span>
            </SisterStyled>
            <BabyStyled>{format.description}</BabyStyled>
          </BrotherStyled>
        ))}
      </MotherStyled>
    </ParentStyled>
  );
};

export default Formats;

const ParentStyled = styled.div`
  padding: 20px;
  border-radius: 8px;
  width: 1110px;
  height: 280px;
  margin: 0 auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  > h1 {
    font-size: 28px;
    margin-bottom: 25px;
    margin-block-start: auto;
    display: flex;
    align-items: flex-start;
    color: white;
  }
`;

const MotherStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const BrotherStyled = styled.div`
  border: none;
  border-radius: 16px;
  padding: 15px;
  width: 540px;
  height: 193px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: rgba(57, 144, 249, 0.135);
`;

const SisterStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  margin-bottom: 10px;
  color: white;
  > span {
    font-weight: bold;
    color: white;
  }
`;

const BabyStyled = styled.span`
  gap: 20px;
  font-size: 14px;
  color: white;
  display: block;
  display: flex;
  text-align: initial;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
  z-index: 2;
  overflow: auto;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
`;
