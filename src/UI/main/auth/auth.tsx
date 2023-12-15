import { FC } from "react";
import styled from "styled-components";
import { SignIn } from "./login";

const Styled = styled.section`
display: flex;
align-items: center;
justify-content: center;
background-color: var(--color-violet-light);
`
export const Auth:FC = ()=>{
  return(
    <Styled>
      <SignIn/>
    </Styled>
  )
} 