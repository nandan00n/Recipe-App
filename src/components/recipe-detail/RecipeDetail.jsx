import React from "react";

export default function RecipeDetail({detailRecipe}) {
  return (
    <div className="card" style={{width: '40rem', borderRadius:'12px',margin:'130px 0 0 130px' , boxShadow:'-1px 5px 10px rgb(39, 168, 68)'}}>
      <div className="card-body">
        <h5 className="card-title">{detailRecipe.id}</h5>
        <h1 className="card-text">{detailRecipe.name}</h1>
        <p className="p"><h6>{detailRecipe.ingredients}</h6></p>
        <img style={{height:'200px', borderRadius:'12px'}} src={detailRecipe.image} alt="image" />
        <button style={{backgroundColor:"rgb(39, 168, 68)",border:"0",borderRadius:"5px",marginLeft:"180px"}}>Order Now</button>
      </div>
    </div>
  );
}
