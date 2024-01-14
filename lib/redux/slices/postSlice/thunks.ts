/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchPost } from './postServices'


export const getPostWithThunk = createAppAsyncThunk(
  'get/getPostWithThunk',
  async () => {
    const response = await fetchPost()
    return response.data
  }
)



