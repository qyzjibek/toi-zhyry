import React, { useState } from "react";
import villa from "../../assets/villa.jpg";
import versal from "../../assets/versal.jpg";
import rassal from "../../assets/rassal.jpg";

export const Restaurants = ({setPrice, setTotalObject}) => {
    const [rest, setRest] = useState("");

  const handleRest = (val) => {
      switch (val) {
          case "econom": setPrice(10000); break;
          case "middle": setPrice(20000); break;
          case "vip": setPrice(40000); break;
          default: return;
      }

    setRest(val);
    setTotalObject((prev) => ({
        ...prev,
        rest: val
    }));
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
              <p className="rest-rate" style={{textAlign: "center"}}>Адам басына 10K тг дейін</p>
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
              <p className="rest-rate" style={{textAlign: "center"}}>Адам басына 20K тг дейін</p>
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
              <p className="rest-rate" style={{textAlign: "center"}}>Адам басына 45K тг дейін</p>
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
