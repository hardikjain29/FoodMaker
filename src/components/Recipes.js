import React from 'react';
import Recipe from './Recipe';

const Recipes = React.createClass({
	render()
	{
		var ms = {marginTop:'30px'};
		return(
			<div style={ms} className="containers">
				<div className="row">
					{this.props.recipes.recipes.map((recipe,i) => <Recipe {...this.props} recipe={recipe} key={i} />)}
				</div>
			</div>
			)
	}

});

export default Recipes;