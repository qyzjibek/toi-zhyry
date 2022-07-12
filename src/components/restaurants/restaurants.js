import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import logo from "../../assets/qalaulym_logo.png";

export const Restaurants = () =>{

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
        <div>          
            <FormControlLabel value="female" control={<Radio />} label="Female"></FormControlLabel>
          <img width="100px" src={logo}/></div>
          <FormControlLabel value="male" control={<Radio />} label="Male"> </FormControlLabel>
        </RadioGroup>
      </FormControl>
    );
}


//   <div className='restaurants-container'>
//       <ul>
//         <li>
//             <input id='econ' type="radio" className='rest-select' />
//             <label htmlFor='econ' ><img src={logo} style={{width:"100px"}}/></label>
//         </li>
//         <li>
//             <input id='mid' type="radio" className='rest-select'/>
//             <label htmlFor='mid' ><img src={logo} style={{width:"100px"}}/></label>        </li>
//         <li>
//             <input id='vip' type="radio" className='rest-select'/>
//             <label htmlFor='vip' ><img src={logo} style={{width:"100px"}}/></label>        </li>
//       </ul>
//   </div>
