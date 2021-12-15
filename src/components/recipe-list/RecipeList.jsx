import React from "react";


export default function RecipeList(props) {
  return (
    
      <div>
        {props.recipes.map(recipe => {
          return (
            <div
              className="card" style={{height:'200px',marginBottom:"50px", borderRadius:'12px', boxShadow:'-1px 5px 10px rgb(39, 168, 68)'}}
              key={recipe.id}
              onClick={() => props.sendRecipe(recipe)}
            >
              <div className="card-header"><h5>{recipe.id}</h5></div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  {/* <p>{recipe.id}</p> */}
                    <h4 title="Source Title">{recipe.name}</h4> <br />
                     <h5 title="Source Title">Price- {recipe.price} Only</h5>
                </blockquote>
              </div>
            </div>
          );
        })}
      </div>

  );
}
