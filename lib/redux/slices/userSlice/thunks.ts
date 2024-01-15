/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

import { fetchUser } from './userServices'



export const getUserWithThunk = createAppAsyncThunk(
  'user/getUserWithThunk',
  async () => {
    const response = await fetchUser()
    
    

    
    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)


