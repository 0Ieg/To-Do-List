import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'http://localhost:3001/todos'
})
export const deleteTodo = (id:string)=>{
  return(
    myAxios.delete(`${id}`)
    .then(resp=>console.log(resp))
  )
}


export const getTodos = ()=>{
  return(
    myAxios.get('')
    .then((todos)=>todos.data)
  )
}
