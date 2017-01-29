import React from 'react';

const Recipe = React.createClass({

	render(){
		var title = {backgroundColor: "rgba(0,0,0,0.1)"}
		return(
			<div className="col s12 m6">
              <div className="card large hcard">
                <div className="card-image">
                  <img src={this.props.recipe.image}/>
                  <span style={title} className="card-title">{this.props.recipe.label}</span>
                </div>
                <div className="card-content">
                  <p>Calories: {this.props.recipe.calories}</p>
                  <p>Total Weight: {this.props.recipe.totalWeight}</p>
                </div>
                <div className="card-action">
                  <a href={this.props.recipe.url} target="_blank">Read the Recipe</a>
                </div>
              </div>
            </div>
			)
	}

});

export default Recipe;