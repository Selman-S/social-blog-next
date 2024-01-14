/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

import { fetchUser } from './service/userServices'



export const getUserWithThunk = createAppAsyncThunk(
  'get/getUserWithThunk',
  async () => {
    const response = await fetchUser()
    

    
    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)


