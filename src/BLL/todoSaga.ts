import { createAction } from "@reduxjs/toolkit"

import { call, put, takeEvery } from "redux-saga/effects"
import { completeTodoAPI, deleteTodoAPI, getTodosAPI } from "../API/todoListAPI"
import { getTodos } from "./todoSlice"


export const getTodosAsyncAC = createAction('getTodosAsyncAction')
export const deleteTodoAsyncAC = createAction<string|undefined>('deleteTodoAsyncAction')
export const completeTodoAsyncAC = createAction<{id:string,completed:boolean}|undefined>('completeTodoAsyncAction')
export function* Watcher(){
  yield takeEvery(getTodosAsyncAC().type, GetTodoWorker)
  yield takeEvery(deleteTodoAsyncAC().type, DeleteTodoWorker)
  yield takeEvery(completeTodoAsyncAC().type, СompleteTodoWorker)
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