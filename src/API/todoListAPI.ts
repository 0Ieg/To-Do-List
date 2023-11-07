import axios from 'axios';

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
export const addTodoAPI = (payload:{id:string, text:string, completed:boolean})=>{
  return(
    myAxios.post(``, payload)
    .then(resp=>resp.status===201)
  )
}
export const ClearTodosAPI = (todosID:string[])=>{
  todosID.forEach((id,index)=>setTimeout(()=>myAxios.delete(`${id}`),index*60))
}