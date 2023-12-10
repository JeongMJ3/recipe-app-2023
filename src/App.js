import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import About from "./routes/About"
import Home from "./routes/Home"
import Kor_food from "./routes/Kor_food"
import Navigation from './components/Navigation'
import Detail from './routes/Detail'

function App(){
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/kor" element={<Kor_food />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe-detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;   