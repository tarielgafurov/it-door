import React from 'react'
import styled from 'styled-components'
import Line from '../assets/images/image.png'

const RedForm = () => {
  return (
    <>
    <Daiv>
    <Div>
      <h1>2</h1>
    </Div>
    <UpLes>
    <h1>Поддержка и внимание</h1>
    <span>Мы формируем небольшие группы до 12
человек, в каждой группе есть основной
преподаватель и ассистент.</span>
    </UpLes>
    </Daiv>
    <Img src={Line} alt="" />
    </>
  )
}

export default RedForm

const Img = styled.img`
    position: absolute;
    margin-left: 141px;
    margin-top: -206.97px;
    margin-left: 110px;
`


const UpLes = styled.div`
    width: 298.75px;
    height: 112px;
    margin-top: 50px;
    >h1{
        font-size: 19px;
        font-weight: 700;
        color: #F3F4F8;
        margin-top: -4px;
    }
    >span{
        color: #B1B1B5;
        font-size: 12.12px;
        font-weight: 400;
        margin-top: 4px;
        margin-left: 3px;
    }
`

const Daiv = styled.div`
    width: 298.75px;
    height: 236px;
    margin-left: 364.28px;
    margin-top: -235.6px;
`

const Div = styled.div`
    width: 97.91px;
    height: 74px;
    border-radius: 24px;
    background-color: #991516;
    margin-left: 100.31px;
    >h1{
        position: absolute;
        color: white;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
        font-size: 25px;
        margin-left: 43px;
    }
`
