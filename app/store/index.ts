import { configureStore } from '@reduxjs/toolkit'
import tarkReducer from '../slice/TaskListApp'
import configurationapp from '../slice/configuration'
export const store = configureStore({
  reducer: {
     tarkReducer,
     configurationapp
  }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store