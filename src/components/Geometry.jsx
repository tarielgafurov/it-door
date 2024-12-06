import React from 'react'
import styled from 'styled-components'
import BlueForm from './BlueForm'
import RedForm from './RedForm'
import YellowForm from './YellowForm'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Geometry = () => {


    const [ref, inView] = useInView({
        triggerOnce: false, 
        threshold: 0.3,     
    });


  return (
    <>
    <div
      style={{
        height: "100vh", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ x: 550, opacity: 0 }} 
        animate={inView ? { x: 0, opacity: 1 } : { x: 400, opacity: 0 }} 
        transition={{ duration: 2, ease: "easeOut" }} 
        >
    <Div>
      <BlueForm/>
      <RedForm/>
      <YellowForm/>
    </Div>
      </motion.div>
    </div>
    </>
  )
}

export default Geometry

const Div = styled.div`
    width: 1041.67px;
    height: 236px;
    position: absolute;
    margin-top: -420px;
    margin-left: -518px;
`