import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/rice">밥 요리</Link>
            <Link to="/noodle">면 요리</Link>
            <Link to="/soup">국 & 찌개</Link>
            <Link to="/bunsik">분식</Link>
            <Link to="/side">반찬류</Link>
            <Link to="/add">레시피 추가</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation; 