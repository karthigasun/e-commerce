import { createStore } from "redux";
import { initialState,stateReducer } from "./Reducer";
export const Store=createStore(stateReducer,initialState);