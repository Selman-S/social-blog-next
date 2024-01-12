/* Core */
import { Posts } from '@/types/postType'
import { createSlice } from '@reduxjs/toolkit'
import { getPost } from './thunks'



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
    // fetchStart: (state) => {
    //   state.loading = true
    // },
    // setPosts: (state, action) => {
    //   state.data = action.payload
    //   state.loading = false
    // },
    // setPost: (state, action) => {
    //   state.data.data.push(action.payload)
    //   state.loading = false
    // },
    // updatePost: (state, action) => {
    //   const index = state.data.data.findIndex(post => post.id === action.payload.id)
    //   state.data.data[index] = action.payload
    //   state.loading = false
    // },
    // deletePost: (state, action) => {
    //   state.data.data = state.data.data.filter(post => post.id !== action.payload)
    //   state.loading = false
    // },
    // fetchError: (state, action) => {
    //   state.error = action.payload
    //   state.loading = false
    // },
  
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = true
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false
      
        
        state.data.push(action.payload)
      })
  },

})

/* Types */
export interface PostSliceState {
  data:Posts[]
  loading: boolean
  error: null | string
}
