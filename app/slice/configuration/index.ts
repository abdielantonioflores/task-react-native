import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'


export const configurationSlice = createSlice({
  name: 'configurationapp',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:{
    isAuthenticate:{
        value:false
    }
  },
  reducers: {
    setIsAutheticate: (state,action) => {
      state.isAuthenticate ={
        value: action.payload
      }
    
    }
  }
})

export const {setIsAutheticate } = configurationSlice.actions



export default configurationSlice.reducer