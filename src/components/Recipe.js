import React from 'react'
import PropTypes from 'prop-types'
import './Recipe.css' 
import { Link } from 'react-router-dom'

function Recipe({ name, image, ingredients, directions }){
    return (
        <div className="recipe">
            <Link to="/recipe-detail" state = { {name, image, ingredients, directions} } >
            <img src={image} alt={name} title={name} />
            <div className="recipe__data">
                <h3 className="recipe__name">{name}</h3>
            </div>
            </Link>
        </div>
    );
}

Recipe.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    directions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Recipe;