import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { todoListReducer } from "./todoSlice"
import createSagaMiddleware from 'redux-saga'
import { Watcher } from "./todoSaga"

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer:{
    todoList: todoListReducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false, thunk:false}).concat(sagaMiddleware)
})
sagaMiddleware.run(Watcher)

export type StateType = ReturnType<typeof store.getState>
