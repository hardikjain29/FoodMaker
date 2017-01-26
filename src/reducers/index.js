import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ingredients from './ingredients';
import recipes from './recipes';

const rootReducer = combineReducers({ingredients, recipes, routing: routerReducer });

export default rootReducer;
