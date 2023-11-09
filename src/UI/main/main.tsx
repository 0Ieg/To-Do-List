import { FC } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom'
import { TodoList } from './todolist/todoList';
import { Container } from '../templates/container';
import { Information } from './information/information';

const Styled = styled.main`
flex-grow: 1;
padding-top: 30px;
`
export const Main: FC = () => {
  return (
    <Styled>
      <Container>
        <Routes>
          <Route path='' element={<TodoList />} />
          <Route path='information' element={<Information/>} />
        </Routes>
      </Container>
    </Styled>
  )
}
