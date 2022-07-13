import { SlideBar } from "../slideBar/slideBar";
import { Link } from "react-router-dom";

export const Page1 = () => {
    
    return (
        <div className="desc-wrapper">
        <SlideBar />
        <Link to="/page2"><button id="calc-btn" style={{padding: "20px 40px", margin: "40px"}}>Келесі</button></Link>
        </div>
    )
}