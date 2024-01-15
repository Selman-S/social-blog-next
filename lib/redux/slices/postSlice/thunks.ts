/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { getPosts } from './postServices/getPosts'
import { getPost } from './postServices/getPost';



export const getPostsWithThunk = createAppAsyncThunk(
  'post/getPostsWithThunk',
  async () => {
    const response = await getPosts();
    // console.log('response', response);
    
    return response.data
  }
)


export const getPostWithThunk = createAppAsyncThunk(
  'post/getPostWithThunk',
  async (id:string) => {
    const response = await getPost(id);
   
    
    return response
  }
)

