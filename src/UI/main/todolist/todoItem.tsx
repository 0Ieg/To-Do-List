import { FC } from 'react';
import styled from 'styled-components';
import { deleteTodo } from '../../../API/todoListAPI';

const Styled = styled.div`
display: flex;
.delete{
  cursor: pointer;
  font: 400 20px Inter;
}
`
export const TodoItem:FC<{id:string, text:string, completed:boolean}> = (props)=>{
  const {id, text, completed} = props
  const completeHandler = ()=>{
    console.log(!completed)
  }
  const deleteHandler = ()=>{
    deleteTodo(id)
  }
  return (
    <Styled>
      <input type="checkbox" name="" id="" checked={props.completed} onChange={completeHandler}/>
      <div>{props.text}</div>
      <button className='delete' onClick={deleteHandler}>Delete</button>
    </Styled>
  )
}
