import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTodos } from '../../../API/todoListAPI';
import { TodoItem } from './todoItem';

const Styled = styled.section`
display: flex;
flex-direction: column;
gap: 15px;
`
export const TodoList:FC = ()=>{
  const [todoList, setTodoList] = useState()
  useEffect(()=>{
    getTodos().then(todos=>{
      setTodoList(todos.map((todo:any)=><TodoItem {...todo} key={todo.id}/>))
    })
  },[])
  return (
    <Styled>
      {todoList}
    </Styled>
  )
}
