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
      // case "removeFromCart":
      //   return{

      //   }

      default:
        return state;
  };
  
}

