import React from 'react';

const Ingredient = React.createClass({
	render(){
		return(

				<div className="Ingredient">
					<div className="chip">
						{this.props.ingg.ingredients}
					    <i onClick = {() => this.props.deleteIngredient(this.props.i)} className="close material-icons">close</i>
					</div>

				</div>


			) 
	}
});

export default Ingredient;