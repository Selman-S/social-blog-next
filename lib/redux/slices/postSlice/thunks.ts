/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { getPosts } from './service/getPosts'

export const getPost = createAppAsyncThunk(
  'get/getPosts',
  async () => {
    const response = await getPosts()


    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

