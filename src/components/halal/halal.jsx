import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';

export const Halal = () => {
  const [isHalal, setIsHalal] = useState("");

  const handleHalalChange = (val) => {
    setIsHalal(val);
    console.log(isHalal);
  };

  return (
    <>
     <h3 style={{margin: "40px", fontSize: "30px"}}>Соңғы ең маңызды сұрақ</h3>
      <div className="wrapper">
        <div className="halal-container">
          <ul>
            <li>
              <img
                width="200px"
                src="https://halaldamu.kz/storage/app/uploads/public/612/f68/fdb/612f68fdb30bb989105215.png"
                alt="halal"
              />
              <input
                type="radio"
                value="halal"
                checked={isHalal === "halal"}
                name="radio"
                className="halal-select"
                id="hal"
                onChange={(e) => handleHalalChange(e.target.value)}
              />
              <label htmlFor="hal" className="halal-labels">
                <h3 className="label-text">Halal</h3>
              </label>
            </li>
<li>
              <img
                width="200px"
                src="https://igualtat.upc.edu/en/shared/assetjament/icona-alcohol.png/@@images/18fce3df-0d1d-4628-bd72-38f893334055.png"
                alt="no-halal"
              />
              <input
                type="radio"
                value="notHalal"
                checked={isHalal === "notHalal"}
                name="radio"
                className="halal-select"
                id="notHal"
                onChange={(e) => handleHalalChange(e.target.value)}
              />
              <label htmlFor="notHal" className="halal-labels">
                <h3 className="label-text">Not Halal</h3>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="link-btn">
        <Link to="/finalpage">
          <button
            id="calc-btn"
            style={{ padding: "20px 40px", margin: "40px" }}
          >
            Келесі
          </button>
        </Link>
      </div>
    </>
  );
};
