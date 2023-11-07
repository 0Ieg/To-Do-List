import { FC } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { clearTodosAsyncAC, deleteTodoAsyncAC, getTodosAsyncAC } from "../../../BLL/todoSaga";
import { StateType } from "../../../BLL/store";
import { getTodos } from "../../../BLL/todoSlice";

const Styled = styled.div`
display: flex;
.progress{
  flex-grow: 1;
  background-color: var(--color-violet-light);
  border-radius: 10px 0 0 10px;
  position: relative;
  .value{
    font: 700 20px Inter;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
  }
}
.button{
  cursor: pointer;
  padding: 10px;
  border-radius: 0 var(--borrad) var(--borrad) 0;
  font: 400 16px Inter;
  background-color: var(--color-violet);
  transition: background-color 0.05s ease, color 0.05s ease;
}
`
export const ProgressAndClearing:FC = ()=>{
  const dispatch = useDispatch()
  const todos = useSelector((state:StateType)=>state.todoList)
  const clearHandler = ()=>{
    const allTodosID = todos.map(todo=>todo.id)
    dispatch(clearTodosAsyncAC(allTodosID))
    setTimeout(()=>dispatch(getTodos([])),allTodosID.length*20)
  }
  return(
    <Styled>
      <div className="progress">
        <div className="field"></div>
        <div className="value">25%</div>
      </div>
      <button className="button" onClick={clearHandler}>Clear To-Do List</button>
    </Styled>
  )
}