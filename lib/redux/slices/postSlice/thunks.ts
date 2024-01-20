/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { getPosts } from './postServices/getPosts'
import { getPostById } from './postServices/getPostById';



export const getPostsWithThunk = createAppAsyncThunk(
  'post/getPostsWithThunk',
  async () => {
    const response = await getPosts();
    // console.log('response', response);
    
    return response.data
  }
)


export const getPostByIdWithThunk = createAppAsyncThunk(
  'post/getPostWithThunk',
  async (id:string) => {
    const response = await getPostById(id);
   
    
    return response
  }
)

