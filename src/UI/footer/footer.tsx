import { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../templates/container';

const Styled = styled.footer`
  
`
export const Footer: FC = () => {
  return (
    <Container>
      <Styled>
        Footer
      </Styled>
    </Container>
  )
}
