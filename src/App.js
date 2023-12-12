import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import About from "./routes/About"
import Home from "./routes/Home"
import AddRecipe from "./routes/AddRecipe"
import RiceType from "./routes/RiceType"
import NoodleType from "./routes/NoodleType"
import SoupType from "./routes/SoupType"
import BunsikType from "./routes/BunsikType"
import SideType from "./routes/SideType"
import Navigation from './components/Navigation'
import Detail from './routes/Detail'

function App(){
  return (
    <div>
      <Navigation />

      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/rice" element={<RiceType />} />        
        <Route path="/noodle" element={<NoodleType />} />        
        <Route path="/soup" element={<SoupType />} />        
        <Route path="/bunsik" element={<BunsikType />} />        
        <Route path="/side" element={<SideType />} />        
        <Route path="/about" element={<About />} />
        <Route path="/recipe-detail" element={<Detail />} />
      </Routes>
    </div>
  );
}


export default App;   