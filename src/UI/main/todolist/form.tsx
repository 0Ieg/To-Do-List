import { FC, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { addTodoAsyncAC } from "../../../BLL/todoSaga";

const Styled = styled.form`
width: 100%;
height: 40px;
display: flex;
.field{
  flex-grow: 1;
  border-radius: var(--borrad) 0 0 var(--borrad);
  padding: 10px;
  font: 400 20px Inter;
  &:focus{
    outline: none;
  }
}
.button{
  cursor: pointer;
  padding: 10px;
  border-radius: 0 var(--borrad) var(--borrad) 0;
  font: 400 16px Inter;
  background-color: var(--color-violet);
  transition: background-color 0.05s ease, color 0.05s ease;
  &:disabled{
    background-color: var(--color-violet-light);
  }
}
`
export const NewTodoForm:FC = ()=>{
  const {handleSubmit, register, reset, formState:{errors, isValid, isSubmitSuccessful}} = useForm({mode:'onTouched'})
  useEffect(()=>reset({'text':''}), [isSubmitSuccessful])
  const validParams = {
    required:'Enter the text',
  }
  const dispatch = useDispatch()
  const handler = (value:FieldValues)=>{
    const todo = {id:new Date().toISOString(), text:value.text, completed:false}
    dispatch(addTodoAsyncAC(todo))
  }
  return(
    <Styled onSubmit={handleSubmit(handler)}>
      <input className="field" type="text" {...register('text', validParams)} placeholder={errors?.text?errors.text.message as string:''} autoComplete="off"/>
      <button className="button" disabled={!isValid}>Add To-Do</button>
    </Styled>
  )
}