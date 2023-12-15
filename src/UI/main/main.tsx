import { FC } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom'
import { TodoList } from './todolist/todoList';
import { Container } from '../templates/container';
import { Information } from './information/information';
import { useSelector } from 'react-redux';
import { StateType } from '../../BLL/store/store';
import { Auth } from './auth/auth';

const Styled = styled.main`
flex-grow: 1;
padding-top: 30px;
`
export const Main: FC = () => {
  const isAuth = useSelector((state:StateType)=>state.auth.isAuth)
  return (
    <Styled>
      <Container>
        <Routes>
          {isAuth?<Route path='' element={<TodoList/>}/>: <Route path='' element={<Auth/>}/>}
          <Route path='information' element={<Information/>} />
        </Routes>
      </Container>
    </Styled>
  )
}
