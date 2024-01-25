/* Core */
import { CurrentUser, Owner, UserFull } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'
import {  getUserWithThunk, getUsersWithThunk } from './thunks'



/* Instruments */
// post type




const initialState: UserSliceState = {
  data: [],
  userDetail: null,
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
    setUserDetail: (state, action) => {
      state.userDetail = action.payload
      state.loading = false
    },

    fetchError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    removeUser : (state,action) => {
      state.data = state.data.filter((user) => user.id !== action.payload)
    },
  
    
  },
  extraReducers: (builder) => {
    builder
     .addCase(getUsersWithThunk.pending, (state) => {
       state.loading = true
     })
      .addCase(getUsersWithThunk.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(getUsersWithThunk.rejected, (state, action) => {
        state.error = 'Error'
        state.loading = false
      })
      .addCase(getUserWithThunk.pending, (state) => {
        state.loading = true
      })
       .addCase(getUserWithThunk.fulfilled, (state, action) => {
         state.userDetail = action.payload.data
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
  userDetail: null | UserFull
  error: null | string
  currentUser: null  | CurrentUser
}
