import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import store from '../../store'
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    const reduxState = store.getState()
    this.state = {
      recipes: reduxState.recipeList
    };
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.recipeName}
          category={recipe.recipeCategory}
          authorFirst={recipe.authorFirstName}
          authorLast={recipe.authorLastName}
          ingredients={recipe.ingredientList}
          instructions={recipe.instructionList}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
