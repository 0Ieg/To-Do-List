import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { clearTodosAsyncAC } from "../../../BLL/todoSaga";
import { StateType } from "../../../BLL/store";
import { getTodos } from "../../../BLL/todoSlice";

const Styled = styled.div<{translate:number}>`
display: flex;
.progress{
  flex-grow: 1;
  background-color: var(--color-violet-light);
  border-radius: 10px 0 0 10px;
  position: relative;
  overflow: hidden;
  .field{
    width: 100%;
    height: 100%;
    position: relative;
    .status{
      width: 100%;
      height: 100%;
      background-color: var(--color-green);
      border-radius: 10px 0 0 10px;
      box-shadow: ${props=>((props.translate===-100)?0:1)+"px" + " 0 "+ ((props.translate===-100)?0:3)+"px var(--color-green)"};
      transform: ${props=>'translateX('+ props.translate +'%)'};
      transition: transform 0.5s ease;
    }
  }
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
  let completed = 0
  let [translate, setTranslate] = useState(-100)
  useEffect(()=>{
    todos.forEach(todo=>{todo.completed?completed+=1:completed+=0})
    setTranslate(completed?(1-(completed/todos.length))*100*-1:-100)
  },[todos])
  const clearHandler = ()=>{
    const allTodosID = todos.map(todo=>todo.id)
    dispatch(clearTodosAsyncAC(allTodosID))
    setTimeout(()=>dispatch(getTodos([])),allTodosID.length*10)
  }
  return(
    <Styled translate={translate}>
      <div className="progress">
        <div className="field">
          <div className="status"></div>
        </div>
        <div className="value">{Math.ceil(100-(translate*-1))+"%"}</div>
      </div>
      <button className="button" onClick={clearHandler}>Clear To-Do List</button>
    </Styled>
  )
}

