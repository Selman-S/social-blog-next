/* Core */
import { Posts } from '@/types/postType'
import { createSlice } from '@reduxjs/toolkit'


/* Instruments */
// post type




const initialState: PostSliceState = {
  data: {
    data: [],
    total: 0,
    page: 0,
    limit: 0
  },
  loading: false,
  error: null
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
    setPost: (state, action) => {
      state.data.data.push(action.payload)
      state.loading = false
    },
    updatePost: (state, action) => {
      const index = state.data.data.findIndex(post => post.id === action.payload.id)
      state.data.data[index] = action.payload
      state.loading = false
    },
    deletePost: (state, action) => {
      state.data.data = state.data.data.filter(post => post.id !== action.payload)
      state.loading = false
    },
    fetchError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  
    
  },


})

/* Types */
export interface PostSliceState {
  data:Posts
  loading: boolean
  error: null | string
}
