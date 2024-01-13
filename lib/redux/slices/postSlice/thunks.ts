/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchPost } from './service/postServices'


export const getPostWithThunk = createAppAsyncThunk(
  'get/getPostWithThunk',
  async () => {
    const response = await fetchPost()
    

    
    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)


