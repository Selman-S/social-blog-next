/* Core */
import { Posts } from '@/types/postType'
import { createSlice } from '@reduxjs/toolkit'
import { getPostWithThunk } from './thunks'



/* Instruments */
// post type




const initialState: PostSliceState = {
  data: [],
  loading: false,
  error: null,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },
    setPosts: (state, action) => {
      state.data = action.payload
      state.loading = false
    },

    fetchError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  
    
  },
  extraReducers: (builder) => {
    builder
     .addCase(getPostWithThunk.pending, (state) => {
       state.loading = true
     })
      .addCase(getPostWithThunk.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(getPostWithThunk.rejected, (state, action) => {
        state.error = 'Error'
        state.loading = false
      })
  },

})

/* Types */
export interface PostSliceState {
  data:Posts
  loading: boolean
  error: null | string
}
