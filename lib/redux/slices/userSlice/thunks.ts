/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

import { fetchUser } from './userServices'
import { fetcherForThunk } from '@/service/fetcherForThunk'



export const getUserWithThunk = createAppAsyncThunk(
  'user/getUserWithThunk',
  async () => {
    const response = await fetcherForThunk('/user')
    
    

    
    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)


