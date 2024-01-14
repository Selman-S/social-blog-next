'use client'
import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { userSlice } from "@/lib/redux/slices/userSlice"

// Get List,
// Get List By User, Get List By Tag, Get Post By Id,
// Create Post, Update Post, Delete Post
const usePostsCall = () => {
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



 const deleteUser = async (id: string) => {

  try {
   const response = await axiosWithAppId.delete(`/user/${id}`)
   console.log(response.data);

   return response
  } catch (error) {
   console.log(error);
  }
 }

 return { getUsers, deleteUser }

}

export default usePostsCall