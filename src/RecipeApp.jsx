import React, { Component } from "react";
import RecipeDetail from "./components/recipe-detail/RecipeDetail";
import RecipeList from "./components/recipe-list/RecipeList";

export default class RecipeApp extends Component {
  state = {
    recipes: [
     {
        id:"Item-1" ,

        name: "Chicken Biryani",
        price:"299 Rs", 
        ingredients: ["Chicken" +" , "+ "Masala" +" , "+"Rice" +" , "+"Oil"],
        image: 'https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg'
      },
      {
        id: "Item-2",
        name: "Kabab",
        price:"199 Rs",
        ingredients: ["Chicken" +" , "+ "Kabaab powder" +" , "+"salt" +" , "+"Oil"],
        image:'https://static.toiimg.com/photo/imgsize-2234012,msid-69615343/69615343.jpg'
      },
      {
        id: "Item-3",
        name: "Grilled Chicken",
        price:"399 Rs",
        ingredients: ["Chicken" +" , "+"Spices"  +" , "+ "Lemon"],
        image:'https://www.licious.in/blog/wp-content/uploads/2020/12/Roast-Chicken.jpg'
      }
    ],
    showDetail: false,
    selectedRecipe: null
  };
  getRecipe = recipe => {
    console.log(recipe);

    this.setState({
      selectedRecipe: recipe,
      showDetail: true
    });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-success">
          <span className="navbar-brand navbar-light mb-0 h1">Recipe App</span>
          <span className="navbar-brand navbar-light mb-0 h1">Menu</span>
          <span className="navbar-brand navbar-light mb-0 h1">Services</span>
          <span className="navbar-brand navbar-light mb-0 h1">About Us</span>
          <span className="navbar-brand navbar-light mb-0 h1">Contact us</span>
        </nav>
        <hr></hr>
        <div className="row container">
          <div className="col-md-4">
            <RecipeList
              sendRecipe={this.getRecipe}
              recipes={this.state.recipes}
            />
          </div>
          <div className="col-md-4">
            {this.state.showDetail ? (
              <RecipeDetail detailRecipe={this.state.selectedRecipe} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
