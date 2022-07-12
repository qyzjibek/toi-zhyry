import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { height } from '@mui/system';
import { useState } from 'react';

const marks = [
  {
    value: 1,
    label: '10',
  },
  {
    value: 5,
    label: '50',
  },
  {
    value: 15,
    label: '150',
  },
  {
    value: 30,
    label: '300',
  },
  {
    value: 50,
    label: '500',
  },
  {
    value: 100,
    label: '1000',
  },
];

export const SlideBar = () => {

    const [value, setValue] = useState(50);

    function valuetext(value) {
        const res = Number(value) * 10;
       setValue(res);
      return `${res}`;
    }
  return (
      <>
          <h3>Қанша адам шақырасыз?</h3>
      <div className='slider-container'>
    <Box sx={{ width: "80vw", margin: "16px"}}>
      <div style={{fontSize: "26px", fontWeight: "600", margin: "10px 0"}}>Қонақтар саны: {value}</div>

      <Slider
        aria-label="Always visible"
        defaultValue={5}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        sx={{color: "pink", height: "8px"}}
      />
    </Box>
    </div>
    </>
  );
}