/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchPost } from './postServices'
import { fetcherForThunk } from '@/service/fetcherForThunk'


export const getPostWithThunk = createAppAsyncThunk(
  'post/getPostWithThunk',
  async () => {
    const response = await fetcherForThunk('/post');
    console.log('response', response);
    
    return response.data
  }
)



