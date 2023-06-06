import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


export const counterSlice = createSlice({
  name: 'tasklist',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:{
    list:[]
  },
  reducers: {
    setAddTask: (state,action) => {
      state.list = action.payload
    
    },
    setNewTask:(state,action)=>{
      console.log(action.payload)
      state.list.push(action.payload)
    }
  }
})

export const {setAddTask,setNewTask } = counterSlice.actions



export default counterSlice.reducer