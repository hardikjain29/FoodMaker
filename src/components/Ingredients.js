import React from 'react';
import Ingredient from './Ingredient';

const Ingredients = React.createClass({
	render()
	{
		console.log(this.props);
		return(
		<div className="Ingredients">
				{this.props.ingredients.map((ingg,i) =>
					<Ingredient { ...this.props } ingg = {ingg} key={i} />
				)}
		</div>
		)
	}
});

export default Ingredients;