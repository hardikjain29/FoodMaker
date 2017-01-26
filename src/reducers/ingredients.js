function ingredients(state = [], action) {
  switch(action.type) {
    case 'ADD_INGREDIENTS' :
      console.log("Adding");
      return [
        ...state,
        {
          ingredients:action.ing
        }
      ]
    default:
      return state;
  }
}

export default ingredients;
