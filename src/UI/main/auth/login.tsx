import { FC, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { LoginAsyncAC } from "../../../BLL/store/auth/authSaga";

const Styled = styled.article`
background-color: var(--color-blue);
border-radius: var(--borrad);
max-width: 600px;
width: 100%;
padding: 30px;
margin: 30px;
display: flex;
flex-direction: column;
gap: 30px;
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .title{
    width: 100%;
    height: 40px;
    border-radius: var(--borrad);
    background-color: var(--color-violet-light);
    display: flex;
    align-items: center;
    justify-content: center;
    font: 700 24px Inter;
    color: var(--color-blue);
  }
  .input{
    max-width: 400px;
    width: 100%;
    height: 40px;
    border-radius: var(--borrad);
    padding: 10px;
    font: 400 20px Inter;
    min-width: 100px;
    &:focus{
      outline: none;
    }
  }
  .button{
    height: 40px;
    max-width: 400px;
    width: 100%;
    cursor: pointer;
    padding: 10px;
    border-radius: var(--borrad);
    font: 400 16px Inter;
    background-color: var(--color-violet);
    transition: background-color 0.05s ease, color 0.05s ease;
    flex-shrink: 0;
    &:disabled{
      background-color: var(--color-violet-light);
    }
  }
}
`
export const SignIn:FC = ()=>{
  const dispatch = useDispatch()
  const {register, handleSubmit, formState:{isSubmitSuccessful}, reset} = useForm({mode:'onTouched'})
  const submitHandler = (event:any)=>{
    console.log(event)
    dispatch(LoginAsyncAC(event))
  }
  useEffect(()=>{
    reset({'email':null, 'password':null})
  },[isSubmitSuccessful])
  return(
    <Styled>
      <form className="form" onSubmit={handleSubmit(submitHandler)}>
        <h3 className="title">Login</h3>
        <input className="input" type="email" {...register('email')} placeholder="Email"/>
        <input className="input" type="text" {...register('password')} placeholder="Password"/>
        <button className="button">Submit</button>
      </form>
    </Styled>
  )
}