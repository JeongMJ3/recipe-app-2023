import React from 'react';
import recipe_list from '../recipe_list'
import Recipe from '../components/Recipe'
import './Kor_food.css';

class Kor_food extends React.Component {
  state = {
    isLoading: true,
    recipes: [],
  };

  getRecipe = async () => {
    const recipes = await recipe_list;
    // console.log(recipes);
    this.setState({recipes, isLoading: false});
  };

  componentDidMount(){
    this.getRecipe();
  }
  
  render() {
    const { isLoading, recipes } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">'Loading...'</span>
          </div>
          ) : (
            <div className="recipes">
              
            {recipes.map((recipe) => (
              <Recipe
                key = {recipe.id}
                id = {recipe.id}
                name = {recipe.name}
                image = {recipe.image}
                ingredients = {recipe.ingredients}
                directions = {recipe.directions}
              />
          ))}
          </div>
          )}
      </section>
    );
  }
}
 

export default Kor_food;
