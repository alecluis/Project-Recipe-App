import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import Recipe from "./Recipe"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);


  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  }


  const deleteRecipe = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId)
    setRecipes(updatedRecipes)
  }

  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontFamily: 'Playfair Display SC, serif', fontSize: '64px', margin: '0' }}>
          Delicious Food Recipes
        </h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  )
}

export default App;


  

