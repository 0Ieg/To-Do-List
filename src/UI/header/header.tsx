import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Github, Information, ToDoList } from './icons';

const Styled = styled.header`
  position: fixed;
  width: 100%;
  background: linear-gradient(var(--color-violet-light) 0%, var(--color-violet-light) 80%, var(--color-violet-light-op) 100%);
  margin-bottom: 15px;
  height: 55px;
.wrapper{
  height: 40px;
  border-bottom: 2px solid var(--color-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.title{
  user-select: none;
  font: 700 20px Inter;
  color: var(--color-violet);
}
svg{
  width: 30px;
  height: 30px;
}
`
export const Header: FC = () => {
  const [location, setLocation] = useState<string>(useLocation().pathname)
  const relocation = ()=>{
    location==='/'?setLocation('information'):setLocation('/')
  }
  return (
    <Styled>
      <div className="wrapper container">
        <nav className='links'>
          <Link to={location === '/' ? "information" : "/"} onClick={relocation}>{location === '/' ? <Information /> : <ToDoList />}</Link>
        </nav>
        <h2 className="title">To-Do List</h2>
        <div className="contacts">
          <a href="https://github.com/0Ieg" target='_blank'>
            <Github />
          </a>
        </div>
      </div>
    </Styled>
  )
}
