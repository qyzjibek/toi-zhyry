import { SlideBar } from "../slideBar/slideBar";
import { Link } from "react-router-dom";
import { Restaurants } from "../restaurants/restaurants";
import { ExpenseContext } from '../../Context'
import { useContext } from "react";
import { useState } from "react";

export const Page1 = () => {
    const [res, setRes] = useState(0);
    const [price, setPrice] = useState(0);

    const {handleExpenseChange, setTotalObject, totalObject} = useContext(ExpenseContext);

    const handleSubmit = () => {
        handleExpenseChange(price*res);
        console.log(totalObject);
    }

  return (
    <div className="desc-wrapper">
      <Restaurants setPrice={setPrice} setTotalObject={setTotalObject}/>
      <SlideBar setRes={setRes}/>
      <Link to="/page2">
        <button id="calc-btn" style={{ padding: "20px 40px", margin: "40px" }} onClick={handleSubmit}>
          Келесі
        </button>
      </Link>
    </div>
  );
};
