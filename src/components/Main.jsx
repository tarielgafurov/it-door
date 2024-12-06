import React from 'react'
import styled from 'styled-components'
import Geometry from './Geometry'

const Main = () => {
  return (
    <>
    <Daven>
        <Driv>
      <H1>Как проходит учебный процесс</H1>
      <Span>Учебный процесс включает в себя 3 основных принципа нашей школы</Span>
        </Driv>
      <Geometry/>
    </Daven>
    </>
  )
}

export default Main


const Daven = styled.div`
    width: 1041.67px;
    height: 404px;
    background-color: #000000;
    border-radius: 30px;
    margin-top: 150px;
    margin-left: 300px;
`

const Driv = styled.div`
    width: 626.11px;
    height: 98px;
    margin: auto;
`

const H1 = styled.h1`
    color: white;
    font-size: 39.38px;
    font-weight: 700;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-top: -1px;
`
const Span = styled.span`
    color:#B1B1B5;
    font-size: 16.88px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`