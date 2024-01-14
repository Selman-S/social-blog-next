/* Core */
import { Owner } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'
import { getUserWithThunk } from './thunks'



/* Instruments */
// post type




const initialState: UserSliceState = {
  data: [],
  loading: false,
  error: null,
  currentUser: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },
    setUsers: (state, action) => {
      state.data = action.payload
      state.loading = false
    },

    fetchError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
  
    
  },
  extraReducers: (builder) => {
    builder
     .addCase(getUserWithThunk.pending, (state) => {
       state.loading = true
     })
      .addCase(getUserWithThunk.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(getUserWithThunk.rejected, (state, action) => {
        state.error = 'Error'
        state.loading = false
      })
  },

})

/* Types */
export interface UserSliceState {
  data:Owner[]
  loading: boolean
  error: null | string
  currentUser: null | Owner
}
