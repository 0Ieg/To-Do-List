import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'todoList',
  initialState: [] as {id:string, text:string, completed:boolean}[],
  reducers:{
    getTodos:(state, action)=>{
      return state = action.payload
    }
  }
})

export const { getTodos } = slice.actions
export const todoListReducer = slice.reducer
