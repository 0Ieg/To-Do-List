import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { todoListReducer } from "./todo/todoSlice"
import createSagaMiddleware from 'redux-saga'
import { TodoWatcher } from "./todo/todoSaga"
import { AuthReducer } from "./auth/authSlice"
import { all } from "redux-saga/effects"
import { AuthWatcher } from "./auth/authSaga"


const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer:{
    todoList: todoListReducer,
    auth:AuthReducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false, thunk:false}).concat(sagaMiddleware)
})

function* RootWatcher():Generator{
  yield all([AuthWatcher(),TodoWatcher()])
}
sagaMiddleware.run(RootWatcher)

export type StateType = ReturnType<typeof store.getState>
