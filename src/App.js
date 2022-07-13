import './App.css';
import {Header} from './components/header/header';
import { FormItems } from './components/grid-items/index';
import { ExpenseContext } from './Context';
import { useState } from 'react';
import {PricingTable} from './components/pricing-table/index';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Page1 } from './components/pages/page1';
import { useEffect } from 'react';
import Zhar from './assets/zhar-zhar.mp3';
import { Page3 } from './components/pages/page3';
import { FinalPage } from './components/pages/finalPage';
import { Halal } from './components/halal/halal';

function App() {

  const [totalObject, setTotalObject] = useState({});
  let audio = new Audio(Zhar);

  const start = () => {
      audio.play();
  }

  const end = () => {
    audio.pause();
  }

  const [total, setTotal] = useState(0);

  const handleExpenseChange = (sum) => {
    console.log(sum);
    setTotal((prev) => (prev+sum));
  }

  return (
    <BrowserRouter>
      <ExpenseContext.Provider value={{handleExpenseChange, total, totalObject, setTotalObject, setTotalObject}}>
        <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="desc-wrapper" >
              <div className="stats-wrapper">
                <div className="stats">
                <button id="calc-btn" style={{padding: "20px", margin: "40px", borderRadius: "50%"}} onClick={start}>Музыка</button>
                  <div className="stats-emoji">📊</div>
                  <div className="stats-text">Қазақстанда тұтынушылық кредит беру көлемінің шамамен 9.5% - ы үйлену тойын өткізуге арналған қарыздарға тиесілі, деп хабарлады Қазақстан Ұлттық Банкінің Төрағасы Ерболат Досаев.</div>
                </div>
              </div>
              <Link to="/page1"><button id="calc-btn" style={{padding: "20px 40px", margin: "40px"}} onClick={end}>Той шығынын есептеу</button></Link>
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
        <Route
          path="/page3"
          element={
            <Page3 />
          }
        />
        <Route
          path="/page4"
          element={
            <Halal />
          }
        />
        <Route
          path="/finalpage"
          element={
            <FinalPage />
          }
        />
        </Routes>
        </ExpenseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
