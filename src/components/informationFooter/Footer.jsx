import React from "react";
import styled from "styled-components";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <Title>IT-DOOR</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Description>
      <LinksContainer>
        <Link href="#courses">Курсы</Link>
        <Link href="#mentors">Менторы</Link>
        <Link href="#about">О Нас</Link>
        <Link href="#contacts">Контакты</Link>
      </LinksContainer>
      <IconsContainer>
        <FaInstagram style={{ fontSize: "24px", cursor: "pointer" }} />
        <FaWhatsapp style={{ fontSize: "24px", cursor: "pointer" }} />
        <FaTelegram style={{ fontSize: "24px", cursor: "pointer" }} />
      </IconsContainer>
    </FooterContainer>
  );
};


const FooterContainer = styled.footer`
  background-color: rgba(29, 11, 36, 0.135);
  color: white;
  text-align: center;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px; 
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Description = styled.span`
  font-size: 14px;
  margin: 0;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; 
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; 
`;

export default Footer;


