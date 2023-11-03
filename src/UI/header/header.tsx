import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../templates/container';

const Styled = styled.header`
height: 100px;
border-bottom: 2px solid var(--color-black);
display: flex;
align-items: center;
gap: 20px;
`
export const Header: FC = () => {
  return (
    <Container>
      <Styled>
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"todolist"}>To-Do List</NavLink>
      </Styled>
    </Container>
  )
}
