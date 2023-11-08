import { FC } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { completeTodoAsyncAC, deleteTodoAsyncAC } from '../../../BLL/todoSaga';


const Styled = styled.div`
display: flex;
align-items: center;
gap: 10px;
width: 100%;
padding: 0 10px;
background-color: var(--color-violet);
border-radius: var(--borrad);
transition: background-color 0.05s ease;
.completed{
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}
.text{
  flex-grow: 1;
  font: 400 20px Inter;
  cursor: pointer;
  user-select: none;
  padding: 10px 0;
}
.edit,.delete{
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: max-content;
  svg{
    fill: var(--color-black);
    width: 20px;
    height: 20px;
  }
}
&:hover{
  background-color: var(--color-violet-light);
}
`
export const TodoItem:FC<{id:string, text:string, completed:boolean}> = (props)=>{
  const {id, text, completed} = props
  const dispatch = useDispatch()
  const completeHandler = ()=>{
    dispatch(completeTodoAsyncAC({id:id,completed:!completed}))
  }
  const deleteHandler = ()=>{
    dispatch(deleteTodoAsyncAC(id))
  }
  return (
    <Styled>
      <input className='completed' type="checkbox" name="" id="" checked={completed} onChange={completeHandler}/>
      <div className='text' onClick={completeHandler}>{text}</div>
      <button className='edit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
      </button>
      <button className='delete' onClick={deleteHandler}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
        </svg>
      </button>
    </Styled>
  )
}
