
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <SelectStyled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value="Kyrgyz">Kyrgyz</MenuItem>
          <MenuItem value="Russia">Russia</MenuItem>
          <MenuItem value="English">English</MenuItem>
        </SelectStyled>
      </FormControl>
    </Box>
  );
}


const SelectStyled = styled(Select)`
    border: 2px solid white;
    background-color: white;
`


