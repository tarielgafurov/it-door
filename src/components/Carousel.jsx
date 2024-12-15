import React, { useRef, useState } from "react";
import styled from "styled-components";
import StrelkaOne from '../assets/images/Arrow 3.png'
import StrelkaTwo from '../assets/images/Arrow 3 (1).png'



const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 84%;
  position: relative;
  position: absolute;
  margin-left: -621px;
  margin-top: -130px;
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
  transform: translateX(${(props) => props.offset}px);
  transition: transform 1.5s ease-out;
`;

const Card = styled.div`
  min-width: 261px;
  height: 340px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Carousel = () => {
    const [offset, setOffset] = useState(0);
    const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    const { movementX } = event;
    setOffset((prev) => prev + movementX);
  };

    const cardWidth = 220; 
  
    const handleNext = () => {
      setOffset((prevOffset) => prevOffset - cardWidth);
    };
  
    const handlePrev = () => {
      setOffset((prevOffset) => prevOffset + cardWidth);
    };

  return (
    <Wrapper
      onMouseMove={handleMouseMove}
      ref={containerRef}>

        <ButtonContainer>
            <button onClick={handlePrev} ><img src={StrelkaOne} alt="" /></button>
            <button onClick={handleNext} ><img src={StrelkaTwo} alt="" /></button>
        </ButtonContainer>

      <CarouselContainer>
        <Cards offset={offset}>

          <Card style={{backgroundImage: "url('https://s3-alpha-sig.figma.com/img/fbee/b21d/61bb8c3fd4091b4cc3ac5d7e6ce7ff36?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b7KluRq8kR3ZsMsRqHcqQbTOKUlMAdAVSji29McEo7b5o4zpVzpkFKyp61sRdQ4hhAkS9I5sV4aeN6OxSBTyegYWH5z2ORbPDt8~KifNOnu5xZCGsj9bPbDBZxBlIVtenkb3XmsYxiVazzRxZOhn63FVGMEveazEPSOpHOWYDyUwziHMgr2EQoziWQ-PW77ybw8CofroDiRcou~x75Q6VTdPx7R7H1gJw~BrEV3jPZFoiRufn86j6gKj2vJem3JsD2DZFHEY-CL0yBDocMN4dbUAvD3PqKG~~dGSRMfdgOjlhYGfjgUCuoCjc80q5jDlXT0VF9S68EexNh8zNlIiwQ__')"}} >
            <Prozrach>
                         <h1>Имя фамилия</h1>
                        <SpanOne>FrontEnd разработчик</SpanOne> 
                        <SpanTwo>3 год опыт</SpanTwo>
                    </Prozrach>
          </Card>

          <Card style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/81IXTtFKL4L.jpg')" }} >
          <Prozrach>
                         <h1>Имя фамилия</h1>
                        <SpanOne>FrontEnd разработчик</SpanOne> 
                        <SpanTwo>3 год опыт</SpanTwo>
                    </Prozrach>
          </Card>

          <Card style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_.jpg')" }} >
          <Prozrach>
                         <h1>Имя фамилия</h1>
                        <SpanOne>FrontEnd разработчик</SpanOne> 
                        <SpanTwo>3 год опыт</SpanTwo>
                    </Prozrach>
          </Card>
          <Card style={{ backgroundImage: "url('https://prod-printler-front-as.azurewebsites.net/media/photo/140781.jpg')" }} >
          <Prozrach>
                         <h1>Имя фамилия</h1>
                        <SpanOne>FrontEnd разработчик</SpanOne> 
                        <SpanTwo>3 год опыт</SpanTwo>
                    </Prozrach>
          </Card>
          <Card style={{ backgroundImage: "url('https://platform.polygon.com/wp-content/uploads/sites/2/2024/08/s-l1600.jpg?quality=90&strip=all&crop=0%2C5.8203125%2C100%2C88.359375&w=2400')" }} >
          <Prozrach>
                         <h1>Имя фамилия</h1>
                        <SpanOne>FrontEnd разработчик</SpanOne> 
                        <SpanTwo>3 год опыт</SpanTwo>
                    </Prozrach>
          </Card>

          <Card style={{ backgroundImage: "url('https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpg')" }} >
          <Prozrach>
                         <h1>Имя фамилия</h1>
                        <SpanOne>FrontEnd разработчик</SpanOne> 
                        <SpanTwo>3 год опыт</SpanTwo>
                    </Prozrach>
          </Card>
          <Card style={{ backgroundImage: "url('https://external-preview.redd.it/HGUX_Ww-YIC1Yp2aQB5mJhDeciNYTK36G5oFsS29fsY.jpg?width=640&crop=smart&auto=webp&s=2b9c7377881c0996e285de36e0bc57058ecdc60a')" }} >
          <Prozrach>
                         <h1>Имя фамилия</h1>
                        <SpanOne>FrontEnd разработчик</SpanOne> 
                        <SpanTwo>3 год опыт</SpanTwo>
                    </Prozrach>
          </Card>
        </Cards>
      </CarouselContainer>
    </Wrapper>
  );
};

export default Carousel;




const Prozrach = styled.div`
    width: 261px;
    height: 88px;
    border-radius: 0 0 16px 16px;
    background: #0707072E;
    backdrop-filter: blur(4.199999809265137px);
    position: absolute;
    margin-top: 256px;
    >h1{
        color: #ffffff;
        font-weight: 700;
        font-size: 18px;
        position: absolute;
        margin-left: 20px;
    }
    
`
const SpanOne = styled.span`
    font-weight: 300;
    font-size: 16px;
    color: white;
    position: absolute;
    margin-left: -110px;
    margin-top: 35px;
`
const SpanTwo = styled.span`
    font-weight: 300;
    font-size: 16px;
    color: #ffffff;
    position: absolute;
    margin-left: -110px;
    margin-top: 55px;
`

const ButtonContainer = styled.div`
    position: absolute;
    width: 187px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -210px;
    margin-left: 302px;
    >button{
        border: none;
        width: 85px;
        height: 57px;
        border-radius: 16px;
        background: linear-gradient(180deg, rgba(57, 144, 249, 0.135) 0%, rgba(236, 181, 255, 0.135) 100%);
        background-color: #1A1A2E;
    }
`