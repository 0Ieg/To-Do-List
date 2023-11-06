import { createAction } from "@reduxjs/toolkit"
import { call, put, takeEvery } from "redux-saga/effects"
import { addTodoAPI, completeTodoAPI, deleteTodoAPI, getTodosAPI } from "../API/todoListAPI"
import { TodoType, getTodos } from "./todoSlice"


export const getTodosAsyncAC = createAction('GET_TODOS')
export const deleteTodoAsyncAC = createAction<string|undefined>('DELETE_TODO')
export const completeTodoAsyncAC = createAction<{id:string,completed:boolean}|undefined>('COMPLETE_TODO')
export const addTodoAsyncAC = createAction<TodoType|undefined>('ADD_TODO')
export function* Watcher(){
  yield takeEvery(getTodosAsyncAC().type, GetTodoWorker)
  yield takeEvery(deleteTodoAsyncAC().type, DeleteTodoWorker)
  yield takeEvery(completeTodoAsyncAC().type, СompleteTodoWorker)
  yield takeEvery(addTodoAsyncAC().type, AddTodoWorker)
}

function* GetTodoWorker():Generator{
  const todos = yield call(getTodosAPI)
  yield put(getTodos(todos))
}
function* DeleteTodoWorker(action:{type:string,payload:string}):Generator{
  const deleted = yield call(deleteTodoAPI, action.payload)
  if (deleted===true){
    const todos = yield call(getTodosAPI)
    yield put(getTodos(todos))
  }
}
function* СompleteTodoWorker(action:{type:string, payload:{id:string,completed:boolean}}):Generator{
  const changed = yield completeTodoAPI(action.payload)
  if (changed){
    const todos = yield call(getTodosAPI)
    yield put(getTodos(todos))
  }
}
function* AddTodoWorker(action:{type:string, payload:TodoType}):Generator{
  const added = yield addTodoAPI(action.payload)
  if(added){
    const todos = yield call(getTodosAPI)
    yield put(getTodos(todos))
  }
}