import { FC, useEffect } from 'react';
import styled from 'styled-components';

import { TodoItem } from './todoItem';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsyncAC } from '../../../BLL/todoSaga';
import { StateType } from '../../../BLL/store';
import { NewTodoForm } from './form';
import { ProgressAndClearing } from './progress';

const Styled = styled.section`
display: flex;
align-items: center;
justify-content: center;
background-color: var(--color-violet-light);
.wrapper{
  background-color: var(--color-blue);
  border-radius: var(--borrad);
  max-width: 600px;
  width: 100%;
  padding: 30px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .todoList{
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
  }
}
`
export const TodoList:FC = ()=>{
  const allTodos = useSelector((state:StateType)=>state.todoList)
  const todoList = allTodos.map((todo,index)=><TodoItem {...todo} key={todo.id}/>)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTodosAsyncAC())
  },[])
  return (
    <Styled>
      <div className="wrapper">
        <div className='newTodo'>
          <NewTodoForm/>
        </div>
        <div className="todoList">
          {todoList}
        </div>
        <div className="progress">
          <ProgressAndClearing/>
        </div>
      </div>
    </Styled>
  )
}
