import axios from 'axios';
import { deleteTodoAsyncAC } from '../BLL/todoSaga';

const myAxios = axios.create({
  baseURL: 'http://localhost:3001/todos'
})


export const getTodosAPI = ()=>{
  return(
    myAxios.get('')
    .then((todos)=>todos.data)
  )
}
export const deleteTodoAPI = (id:string)=>{
  return(
    myAxios.delete(`${id}`)
    .then(resp=>resp.status===200)
  )
}