import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toibastars } from "../../data/toibastars";
import { useContext } from "react";
import { ExpenseContext } from "../../Context";

export const Page3 = () => {
  const {handleExpenseChange} = useContext(ExpenseContext);
  const [car, setCar] = useState("");
  const [num, setNum] = useState("");

  const handleCar = (val) => {
    setCar(val);
  };

  const numHandler = (e) => {
    setNum(e.target.value);
  }

  const valueChangeHandler = (e, item) => {
    const price = item.cost;
    handleExpenseChange(price*num);
    handleExpenseChange(car);
  };
  

  return (
    <div className="container">
    <div className="title">Тойбастар және құдалар</div>
    <div className="items">
      {toibastars.map((item) => (
        <div className="item-wrapper">
          <img src={item.imageUrl} className="item-img" alt="singer" />
          <div className="item-name">{item.Name}</div>
          <img
            src="https://thumbs.dreamstime.com/b/premium-seal-eps-16109419.jpg"
            className="class-img"
            alt="vip"
          />
          <div className="item-control">
            <div>Данасы: </div>
            <input
              type="number"
              className="item-input"
              onChange={numHandler}
            />
             <button className="item-buy item-btn" onClick={(e) => valueChangeHandler(e, item)}>Заказ беру</button>
          </div>
        </div>
      ))}
    </div>
    <div className="desc-wrapper">
    <div className="instruction"><h2>Құдаларға әуежайдан көлік:</h2></div>
      <div className="radio-buttons">
        <label className="custom-radio">
          <input
            type="radio"
            name="radio"
            value="economCar"
            checked={car === "economCar"}
            onChange={(e) => handleCar(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" src="https://pictures.topspeed.com/IMG/crop/201710/hyundai-accent-5_800x0w.jpg" alt="villa" />
              </div>
              <h2>Hyundai Accent</h2>
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
            value="middleCar"
            checked={car === "middleCar"}
            onChange={(e) => handleCar(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" src="https://s.auto.drom.ru/i24206/c/photos/generations/500x_toyota_camry_g7447.jpg?678579" alt="camry" />
              </div>
              <h2>Toyota Camry</h2>
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
            value="vipCar"
            checked={car === "vipCar"}
            onChange={(e) => handleCar(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" src="https://c4.wallpaperflare.com/wallpaper/438/439/624/2016-cars-lexus-lx-570-wallpaper-preview.jpg" alt="lexus" />
              </div>
              <h2>Lexus LX570</h2>
              <span className="check-icon">
                <span className="icon"></span>
              </span>
            </div>
          </div>
        </label>
      </div>
      <Link to="/page4">
        <button id="calc-btn" style={{ padding: "20px 40px", margin: "40px" }}>
          Келесі
        </button>
      </Link>
    </div>
    </div>
  );
};
