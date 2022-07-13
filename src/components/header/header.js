import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import logo from "../../assets/qalaulym_logo.png";
import './index.css'

export const Header = () => {
  return (
    <>
      <div className='header-wrapper'>
        <div className='header-inner'>
          <img src={logo} style={{width: "108px", padding: "10px", borderRadius: "50%", fontFamily: "'Open Sans', sans-serif"}} alt="logo"/>
          <div>
          <div className="headline">Той жыры</div>
          <div className="subtitle">Той шығынын есептейтін калькулятор</div>
          </div>
        </div>
      </div>
    </>
  );
};
