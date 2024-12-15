import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'

const Father = () => {
  return (
    <>
    <Container>
      <Mentora>
        <h1>Наши ментора</h1>
      </Mentora>
        <Carousel/>
    </Container>
    </>
  )
}

export default Father


const Container = styled.div`
    width: 1425px;
    height: 436px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Mentora = styled.div`
    width: 1115px;
    height: 57px;
    margin-top: -380px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >h1{
      color: white;
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        text-align: left;
        text-decoration-skip-ink: none;
    }
`
