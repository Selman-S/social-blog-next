/* Core */
import { Posts,Post, PostFull } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'
import {  getPostsWithThunk } from './thunks'



const initialState: PostSliceState = {
  data: [],
  loading: false,
  error: null,
  postDetail: null,
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
    setPostDetail: (state, action) => {
      state.postDetail = action.payload
      state.loading = false
    },
    removePost: (state, action) => {
      state.data = state.data.filter((post) => post.id !== action.payload)
    }
  
    
  },
  extraReducers: (builder) => {
    builder
     .addCase(getPostsWithThunk.pending, (state) => {
       state.loading = true
     })
      .addCase(getPostsWithThunk.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(getPostsWithThunk.rejected, (state, action) => {
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
  postDetail: null | PostFull
}
