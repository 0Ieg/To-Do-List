import { FC, useEffect } from 'react';
import styled from 'styled-components';

import { TodoItem } from './todoItem';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsyncAC } from '../../../BLL/todoSaga';
import { StateType } from '../../../BLL/store';

const Styled = styled.section`
display: flex;
flex-direction: column;
gap: 15px;
`
export const TodoList:FC = ()=>{
  const allTodos = useSelector((state:StateType)=>state.todoList)
  const todoList = allTodos.map(todo=><TodoItem {...todo} key={todo.id}/>)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTodosAsyncAC())
  },[])
  return (
    <Styled>
      {todoList}
    </Styled>
  )
}
