import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';



const Input = ({placeholder, type, onChange, onClick, key, value, id, label }, props ) => {
  return (
    <InputStyled type={type} placeholder={placeholder} onChange={onChange} onClick={onClick} key={key} value={value} id={id} label={label} style={{...props}} />
    
  )
}

export default Input;

const InputStyled = styled(TextField)`
  width: ${(props) => props.width || "20.938rem" };
  top: ${(props) => props.Top || "20px"};
`