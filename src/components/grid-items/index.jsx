import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { singers } from "../../data/singers";
import { tamadas } from "../../data/tamadas";

export const FormItems = () => {
  const [totalSingers, setTotalSingers] = useState(0);
  const [tamada, setTamada] = useState("");

  const valueChangeHandler = (e, item) => {
    const val = e.target.value;
    const price = item.songCost;
    console.log(val, price);
  };

  const handleTamada = (val) => {
    setTamada(val);
  };
  console.log(tamada);

  return (
    <div className="container">
      <div className="title">Би мен қойылым</div>
      <div className="instruction">Әншілер</div>
      <div className="items">
        {singers.map((item) => (
          <div className="item-wrapper">
            <img src={item.imageUrl} className="item-img" alt="singer" />
            <div className="item-name">{item.Name}</div>
            <img
              src="https://www.pngkey.com/png/full/45-455945_vip-party-weekend.png"
              className="class-img"
              alt="vip"
            />
            <div className="item-control">
              <div>Әндер саны: </div>
              <input
                type="number"
                className="item-input"
                onChange={(e) => valueChangeHandler(e, item)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="instruction">Тамада</div>
      <div className="items">
        {tamadas.map((item) => (
          <div key={item.id} className="radio-buttons">
            <label className="custom-radio">
              <input
                type="radio"
                name="radio"
                value={item.id}
                checked={tamada === item.id}
                onChange={(e) => handleTamada(e.target.value)}
              />
              <div className="radio-btn">
                <div className="content">
                  <div className="img">
                    <img
                      width="200px"
                      height="170px"
                      src={item.imageUrl}
                      alt="tamada"
                    />
                  </div>
                  <h2>{item.Name}</h2>
                  <span className="check-icon">
                    <span className="icon"></span>
                  </span>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
      <Link to="/page2" className="desc-wrapper">
        <button id="calc-btn" style={{ padding: "20px 40px", margin: "40px" }}>
          Келесі
        </button>
      </Link>
    </div>
  );
};
