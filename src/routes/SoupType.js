import React from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase-config.js"
import recipe_list from '../recipe_list'
import Recipe from '../components/Recipe'
import './SoupType.css';

class SoupType extends React.Component {
  state = {
    isLoading: true,
    recipes: [],
    docs: []
  };

  getDB = async () => {
    const querySnapshot = await getDocs(collection(db, "soup"));
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push(doc.data())
    })
    this.setState({docs: docs, isLoading: false});
  };

  getRecipe = async () => {
    const recipes = await recipe_list;
    // console.log(recipes);
    this.setState({recipes, isLoading: false});
  };

  componentDidMount(){
    this.getDB();
  }
    
  render() {
    const { isLoading, docs } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">'Loading...'</span>
          </div>
          ) : (
          <div className="recipes">
            {/* {console.log(docs)} */}
              
            {docs.map((recipe) => (
              <Recipe
                // key = {recipe.id}
                // id = {recipe.id}
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
 
export default SoupType;

