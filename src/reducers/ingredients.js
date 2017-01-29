function ingredients(state = [], action) {
  switch(action.type) {
    case 'ADD_INGREDIENTS' :
      return [
        ...state,
        {
          ingredients:action.ing
        }
      ]
    case 'DELETE_INGREDIENT':
      return[
        ...state.slice(0,action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
}

export default ingredients;
