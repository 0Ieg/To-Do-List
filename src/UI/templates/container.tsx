import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Styled = styled.div`
max-width: 1430px;
width: 100%;
margin: 0 auto;
padding: 0 15px;
`
export const Container:FC<{children:ReactNode}> = (props)=>{
  const {children} = props
  return (
    <Styled>
      {children}
    </Styled>
  )
}
