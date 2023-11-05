import { FC } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { completeTodoAsyncAC, deleteTodoAsyncAC } from '../../../BLL/todoSaga';


const Styled = styled.div`
display: flex;
.delete{
  cursor: pointer;
  font: 400 20px Inter;
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
      <input type="checkbox" name="" id="" checked={completed} onChange={completeHandler}/>
      <div>{text}</div>
      <button className='delete' onClick={deleteHandler}>Delete</button>
    </Styled>
  )
}
