import React from 'react'
import { useLocation } from 'react-router-dom'
import './Detail.css'

function Detail(){
    const locatiuon = useLocation();
    const state = locatiuon.state
    console.log(state);
    return (
        <div className="recipe2">            
            <img src={state.image} alt={state.name} title={state.name} />
            <div className="recipe2__data">
                <h3 className="recipe2__name">{state.name}</h3>
                <h4 className="de_ingre">#   재료</h4>
                <ul className="recipe2__infos">
                    {state.ingredients.map((info, index) => {
                        return (
                        <li key={index} className="recipe2__info">
                            {info}
                        </li>
                        );
                    })}
                </ul>
                <h4 className="de_direc">#   조리법</h4>
                <ul className="recipe2__infos">
                    {state.directions.map((info2, index2) => {
                        return (
                        <li key={index2} className="recipe2__info2">
                            {info2}
                        </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
 
export default Detail;