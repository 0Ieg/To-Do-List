import { FC } from "react";
import styled from "styled-components";

const Styled = styled.article`
  
`
export const Logout:FC = ()=>{
  const submitHandler = ()=>{
    console.log('Log out')
  }
  return(
    <Styled>
      <form action="" onSubmit={submitHandler}>
        <button>Submit</button>
      </form>
    </Styled>
  )
}