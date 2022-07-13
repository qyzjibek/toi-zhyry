import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { singers } from "../../data/singers";
import { tamadas } from "../../data/tamadas";
import { useContext } from "react";
import { ExpenseContext } from "../../Context";

export const FormItems = () => {
  const [totalSingers, setTotalSingers] = useState(0);
  const [tamada, setTamada] = useState("");
  const [num, setNum] = useState(0);
  const {handleExpenseChange, setTotalObject, totalObject} = useContext(ExpenseContext);

  const valueChangeHandler = (e, item) => {
    setTotalObject((prev) => ({
        ...prev,
        music: item.music,
        imageUrl: item.imageUrl
    }))
    const price = item.songCost;
    handleExpenseChange(price*num);
  };

  const numHandler = (e) => {
      setNum(e.target.value);
  }

  const handleTamada = (val) => {
    setTamada(val);
  };

  const handleSubmit = () => {
      console.log(totalObject);
    handleExpenseChange(tamadas[tamada-1].Cost);
  }

  return (
    <div className="container">
      <div className="title">Би мен қойылым</div>
      <div className="instruction"><h2>Әншілер</h2></div>
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
                onChange={numHandler}
              />
               <button className="item-buy item-btn" onClick={(e) => valueChangeHandler(e, item)}>Заказ беру</button>
            </div>
          </div>
        ))}
      </div>
      <div className="radio-container">
      <div className="instruction"><h2>Тамаданы таңдаңыз:</h2></div>
      <div className="radio-buttons">
        <label className="custom-radio">
          <input
            type="radio"
            name="radio"
            value="1"
            checked={tamada === "1"}
            onChange={(e) => handleTamada(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" height="170px" src="https://avatars.mds.yandex.net/get-images-cbir/1473394/hwM-Pe05DWSyjfU6H3zzuA8459/ocr" alt="villa" />
              </div>
              <h2>Айдар Нугманов</h2>
              <p className="rest-rate">VIP</p>
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
            value="2"
            checked={tamada === "2"}
            onChange={(e) => handleTamada(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" height="170px" src="https://zhambylnews.kz/wp-content/uploads/2022/04/1523626221f09w6-740x-740x430.jpg" alt="villa" />
              </div>
              <h2>Нұрлан Қоянбаев</h2>
              <p className="rest-rate">VIP</p>
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
            value="3"
            checked={tamada === "3"}
            onChange={(e) => handleTamada(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" src="https://sn.kz/uploads/news/2021/08/20/611f8de2a2af7215460247.jpg" alt="villa" />
              </div>
              <h2>Тұрсынбек Қабатов</h2>
              <p className="rest-rate">VIP</p>
              <p className="rest-rate" style={{textAlign: "center"}}>Адам басына 45K тг дейін</p>
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
            value="4"
            checked={tamada === "4"}
            onChange={(e) => handleTamada(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" src="https://brod.kz/media/news/ynkv/16449823552vysn-740x.jpg" alt="villa" />
              </div>
              <h2>Азамат Сатыбалды</h2>
              <p className="rest-rate">VIP</p>
              <p className="rest-rate" style={{textAlign: "center"}}>Адам басына 45K тг дейін</p>
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
            value="5"
            checked={tamada === "5"}
            onChange={(e) => handleTamada(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" src="https://stan.kz/download/uploads/news_full1560254591e939747b3f82b5476dc57d74689f6ce8.jpg" />
              </div>
              <h2>Ринат Зайытов</h2>
              <p className="rest-rate">VIP</p>
              <p className="rest-rate" style={{textAlign: "center"}}>Адам басына 45K тг дейін</p>
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
            value="6"
            checked={tamada === "6"}
            onChange={(e) => handleTamada(e.target.value)}
          />
          <div className="radio-btn">
            <div className="content">
              <div className="img">
                <img width="200px" src=	"https://frankfurt.apollo.olxcdn.com/v1/files/vshlhlfqbmuk1-KZ/image;s=1000x700" alt="villa" />
              </div>
              <h2>Стандард пакет</h2>
              <p className="rest-rate">Standard</p>
              <p className="rest-rate" style={{textAlign: "center"}}>Адам басына 45K тг дейін</p>
              <span className="check-icon">
                <span className="icon"></span>
              </span>
            </div>
          </div>
        </label>
      </div>
    </div>
      <Link to="/page3" className="desc-wrapper">
        <button id="calc-btn" style={{ padding: "20px 40px", margin: "40px" }}  onClick={handleSubmit}>
          Келесі
        </button>
      </Link>
    </div>
  );
};
