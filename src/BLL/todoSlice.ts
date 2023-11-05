import { createSlice } from "@reduxjs/toolkit";

export type TodoType = {id:string, text:string, completed:boolean}

const slice = createSlice({
  name: 'todoList',
  initialState: [] as TodoType[],
  reducers:{
    getTodos:(state, action)=>{
      return state = action.payload
    }
  }
})

export const { getTodos } = slice.actions
export const todoListReducer = slice.reducer
