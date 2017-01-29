import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ingredients from './ingredients';
import recipes from './recipes';
import isLoading from './isLoading'

const rootReducer = combineReducers({isLoading, ingredients, recipes, routing: routerReducer });

export default rootReducer;
