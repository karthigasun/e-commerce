import { createSlice } from "@reduxjs/toolkit";
import Datas from "../Data/Data";

const cartSlice=createSlice({
  name:"cart",
  initialState:{
    item:Datas,
    totalAmout:0,
    totalCount:0

  },
  reducers:{}
})
export default cartSlice.reducer;