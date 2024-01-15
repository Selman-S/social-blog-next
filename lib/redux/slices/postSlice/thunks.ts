/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchPost } from './postServices'


export const getPostWithThunk = createAppAsyncThunk(
  'post/getPostWithThunk',
  async () => {
    const response = await fetchPost();
    console.log('response', response);
    
    return response.data
  }
)



