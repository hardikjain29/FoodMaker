import React from 'react';
import Ingredient from './Ingredient';

const Ingredients = React.createClass({
	render()
	{
		return(
		<div className="Ingredients">
				{this.props.ingredients.map((ingg,i) =>
					<Ingredient { ...this.props } ingg = {ingg} i={i} key={i} />
				)}
		</div>
		)
	}
});

export default Ingredients;