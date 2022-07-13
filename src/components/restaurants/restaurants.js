import React, { useState } from "react";
import villa from "../../assets/villa.jpg";
import versal from "../../assets/versal.jpg";
import rassal from "../../assets/rassal.jpg";

export const Restaurants = () => {
  const [rest, setRest] = useState("");

  const handleRest = (val) => {
    setRest(val);
  };

  return (
    <div className="radio-container">
      <h2>Мейрамхананы таңдаңыз:</h2>
      <div className="radio-buttons">
        <label className="custom-radio">
          <input
            type="radio"
            name="radio"
            value="econom"
            checked={rest === "econom"}
            onChange={(e) => handleRest(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" height="170px" src={rassal} alt="villa" />
              </div>
              <h2>Versal</h2>
              <p className="rest-rate">Төменгі класс</p>
              <span className="check-icon">
                <span className="icon"></span>
              </span>
            </div>
          </div>
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="radio"
            value="middle"
            checked={rest === "middle"}
            onChange={(e) => handleRest(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" height="170px" src={versal} alt="villa" />
              </div>
              <h2>Rass-Al</h2>
              <p className="rest-rate">Ортаңғы класс</p>
              <span className="check-icon">
                <span className="icon"></span>
              </span>
            </div>
          </div>
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="radio"
            value="vip"
            checked={rest === "vip"}
            onChange={(e) => handleRest(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" src={villa} alt="villa" />
              </div>
              <h2>Villa dei Fiori</h2>
              <p className="rest-rate">Жоғарғы класс</p>
              <span className="check-icon">
                <span className="icon"></span>
              </span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
