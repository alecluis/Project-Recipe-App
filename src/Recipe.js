import React from "react";
import "./App.css"

function Recipe({ recipe, deleteRecipe, rowIndex }) {
  const imageStyle = {
    objectFit: "scale-down",
    width: "100%",
    height: "100%",
  }
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} style={imageStyle}/>
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Recipe 