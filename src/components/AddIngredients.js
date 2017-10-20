import React from 'react';
import Ingredients from './Ingredients';
import Recipes from './Recipes';
import Loader from 'react-loader';

const AddIngredients = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    const ingr = this.refs.ingredient.value;
    if (ingr) {
      this.props.addIngredient(ingr);
      this.refs.ingredient.value = " ";
    }
  },

  render() {
    var s = {float:'center'};
    var m = {margin:'15px',color:'white'};
    var ms = {marginTop:'125px'};
    return (
      <div className="container">
          <div className="row">
            <div className="ingredients col m10">
              <form ref="inForm" className="in-form" onSubmit={this.handleSubmit}>
                <input style={m}  type="text" ref="ingredient" placeholder="Ingredient"/>
              </form>
          </div>
                <div className="ingredients col m2">
                    <button onClick={this.handleSubmit} type="submit" style={m} className="waves-effect waves-light btn">Add</button>
                </div>
              <div className="ingredients col m12">
                  <Ingredients { ...this.props } />
              </div>
              <div className="col m12">
                <div className="col m4"></div>
                <div className="col m4">
                    <button style={ms} onClick={() => this.props.startLoad(this.props.ingredients)} className="search waves-effect waves-light btn">Search Recipes</button>
                </div>
                <div className="col m4"></div>
              </div>
              <div className="col m12">
                 <Loader style={ms} length={15} width={10} radius={25} color="#00DF77" loaded={!this.props.isLoading.isLoading}>
                    <div className="col m12">
                      <Recipes {...this.props}/>
                    </div>
                </Loader>
              </div>

            </div>
      </div>
    )
  }
});

export default AddIngredients;