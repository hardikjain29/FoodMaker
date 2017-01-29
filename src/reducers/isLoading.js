function isLoading(state = [], action) {
  switch(action.type) {
    case 'REQUEST_LOAD' :
      return{
        ...state,
        isLoading:true
      }
    case 'STOP_LOAD' :
      return{
        ...state,
        isLoading:false
      }
    default:
      return state;
  }
}

export default isLoading;
