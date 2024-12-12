import React from 'react'
import styled from 'styled-components'
import Line from '../assets/images/image.png'

const BlueForm = () => {
  return (
    <>
    <Daiv>
    <Div>
      <h1>1</h1>
    </Div>
    <UpLes>
    <h1>Упор на практику</h1>
    <span>Более 80% обучения - работа над проектами,
много практики и оформление реального
портфолио</span>
    </UpLes>
    </Daiv>
    <Img src={Line} alt="" />
    </>
  )
}

export default BlueForm

const Img = styled.img`
    position: absolute;
    margin-top: -211.7px;
    margin-left: -285px;
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
`

const Div = styled.div`
    width: 97.91px;
    height: 74px;
    border-radius: 24px;
    background-color: #2185D9;
    margin-left: 100.31px;
    >h1{
        position: absolute;
        color: white;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
        font-size: 25px;
        margin-left: 42px;
    }
`