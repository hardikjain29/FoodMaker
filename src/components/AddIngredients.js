import React from 'react';
import Ingredients from './Ingredients';

const AddIngredients = React.createClass({
	handleSubmit(e){
		e.preventDefault();
		const ingr = this.refs.ingredient.value;
		this.props.addIngredient(ingr);
		this.refs.ingredient.value = " ";
	},
  render() {
    return (
      <div className="ingredients">
        <form ref="inForm" className="in-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="ingredient" placeholder="Ingredient"/>
          <button type="submit" className="waves-effect waves-light btn">Add</button>
        </form>
        <Ingredients { ...this.props } />
      </div>
    )
  }
});

export default AddIngredients;
