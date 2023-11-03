import { FC } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom'
import { TodoList } from './todolist/todoList';
import { Container } from '../templates/container';
import { HomePage } from './home/homePage';

const Styled = styled.main`
flex-grow: 1;
`
export const Main: FC = () => {
  return (
    <Styled>
      <Container>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='todolist' element={<TodoList />} />
        </Routes>
      </Container>
    </Styled>
  )
}
