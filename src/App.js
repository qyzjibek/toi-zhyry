import './App.css';
import {Header} from './components/header/header';
import { FormItems } from './components/grid-items/index';
import { ExpenseContext } from './Context';
import { useState } from 'react';
import {PricingTable} from './components/pricing-table/index';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Page1 } from './components/pages/page1';
import { useEffect } from 'react';
import Zhar from './assets/zhar-zhar.mp3'

function App() {
  let audio = new Audio(Zhar);

  const start = () => {
      audio.play();
  }

  const end = () => {
    audio.pause();
  }

  useEffect(() => {
    console.log("i am here");
    start();
}, []);

  const [total, setTotal] = useState(0);

  const handleExpenseChange = (sum) => {
    setTotal((prev) => (prev+sum));
  }

  return (
    <BrowserRouter>
      <ExpenseContext.Provider value={{handleExpenseChange, total}}>
        <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="desc-wrapper" >
              <div className="stats-wrapper">
                <div className="stats">
                  <div className="stats-emoji">📊</div>
                  <div className="stats-text">Порядка 9,5% в объеме потребительского кредитования в Казахстане приходится на займы для проведения свадеб, сообщил председатель Нацбанка Казахстана Ерболат Досаев.</div>
                </div>
              </div>
              <Link to="/page1"><button id="calc-btn" style={{padding: "20px 40px", margin: "40px"}} onClick={end}>Посчитать расход моего тоя</button></Link>
              </div>
            </>
          }
        />
        <Route
          path="/page1"
          element={
            <Page1/>
          }
        />
        <Route
          path="/page2"
          element={
            <FormItems/>
          }
        />
        </Routes>
        </ExpenseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
