export const initialState={
  user:[],
}
export const stateReducer=(state=initialState,action)=>{
  switch(action.type){
    case "add":
      return{
        ...state,
        user:[...state.user,action.payload],
      };

      default:
        return state;
  }
}