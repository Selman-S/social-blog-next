/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

import { getUsers } from './userServices/getUsers'
import { getUser } from './userServices/getUser'

export const getUsersWithThunk = createAppAsyncThunk(
  'user/getUsersWithThunk',
  async () => {
    const response = await getUsers()

    return response.data
  }
)
export const getUserWithThunk = createAppAsyncThunk(
  'user/getUserWithThunk',
  async (id:string) => {
    const response = await getUser(id)
console.log('user', response);

    return response
  }
)

