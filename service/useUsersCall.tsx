'use client'
import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { userSlice } from "@/lib/redux/slices/userSlice"
import { coloredToast } from "@/lib/sweetalertToast/config"

// Get List,
// Get List By User, Get List By Tag, Get Post By Id,
// Create Post, Update Post, Delete Post
const useUsersCall = () => {
 const dispatch = useDispatch()
 const { axiosWithAppId } = useAxios()

 const getUsers = async () => {
  dispatch(userSlice.actions.fetchStart())

  try {
   const response = await axiosWithAppId('/user')
   console.log(response.data);
   dispatch(userSlice.actions.setUsers(response.data.data))

   return response
  } catch (error) {
   console.log(error);
   dispatch(userSlice.actions.fetchError(error))
  }
 }

 const createUserInDummyDb = async ({ firstName, lastName, email, picture }: { firstName: string, lastName: string, email: string, picture: string }) => {
  const data = {
   firstName,
   lastName,
   email,
  }
  try {
   const response = await axiosWithAppId.post('/user/create', data)
   if (response.data.status === 200) {
    try {

     const res = await axiosWithAppId.put(`/user/${response.data.id}`, { picture: picture })
    } catch (error) {
     coloredToast("error", (error as Error).message)
    }

    return response

   }

  } catch (error) {
   console.log(error);
   coloredToast("error", (error as Error).message)
  }
 }



 const deleteUser = async (id: string) => {

  try {
   const response = await axiosWithAppId.delete(`/user/${id}`)
   console.log(response.data);

   return response
  } catch (error) {
   console.log(error);
  }
 }

 return { getUsers, deleteUser, createUserInDummyDb }

}

export default useUsersCall