function recipes(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_LOAD':
      var recipess = [];
      for(var i =0;i<action.data.hits.length;i++)
      {
        recipess.push(action.data.hits[i].recipe);
      }
      return{ 
        ...state,
        recipes: recipess
    }
    default:
      return state;
  }
}

export default recipes;
