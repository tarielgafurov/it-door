import React from 'react'
import styled from 'styled-components'

const YellowForm = () => {
  return (
    <>
    <Daiv>
    <Div>
      <h1>3</h1>
    </Div>
    <UpLes>
    <h1>Реальные проекты</h1>
    <span>Наши студенты разрабатывают качественные
    проекты: веб-сайты, приложения, телеграм боты</span>
    </UpLes>
    </Daiv>
    </>
  )
}

export default YellowForm



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
        font-size: 12.02px;
        font-weight: 400;
        line-height: 24px;
        margin-top: 4px;
        margin-left: 3px;
    }
`

const Daiv = styled.div`
    width: 319.03px;
    height: 212px;
    margin-left: 737.16px;
    margin-top: -238.6px;
`

const Div = styled.div`
    width: 97.91px;
    height: 74px;
    border-radius: 24px;
    background-color: #F1973D;
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