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
export const completeTodoAPI = (payload:{id:string, completed:boolean})=>{
  return(
    myAxios.patch(`${payload.id}`,{completed:payload.completed})
    .then(resp=>resp.status===200)
  )
}
export const addTodoAPP = (payload:{id:string, text:string, completed:boolean})=>{
  return(
    myAxios.post(``, payload)
    .then(resp=>console.log(resp))
  )
}