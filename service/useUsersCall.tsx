'use client'
import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { userSlice } from "@/lib/redux/slices/userSlice"
import { coloredToast } from "@/lib/sweetalertToast/config"


// Get List,
// Get List By User, Get List By Tag, Get Post By Id,
// Create Post, Update Post, Delete Post
const useUsersCall = () => {
 console.log('useUsersCall')
 const dispatch = useDispatch()
 const { axiosWithAppId } = useAxios()


 const getUsers = async () => {
  dispatch(userSlice.actions.fetchStart())

  try {
   const response = await axiosWithAppId('/user?page=2&limit=40')
   console.log(response.data);
   dispatch(userSlice.actions.setUsers(response.data.data))

   return response
  } catch (error) {
   console.log(error);
   dispatch(userSlice.actions.fetchError(error))
  }
 }
 const getFriendsUserPage = async () => {


  try {
   const response = await axiosWithAppId('/user?page=2&limit=30')


   return response.data.data
  } catch (error) {
   console.log(error);
   dispatch(userSlice.actions.fetchError(error))
  }
 }

 const getUserById = async (id: string) => {
  dispatch(userSlice.actions.fetchStart())

  try {
   const response = await axiosWithAppId(`/user/${id}`)
   console.log(response.data);
   dispatch(userSlice.actions.setUserDetail(response.data.data))

   return response
  } catch (error) {
   console.log(error);
   dispatch(userSlice.actions.fetchError(error))
  }
 }

 const createUserInDummyDb = async ({ firstName, lastName, email }: { firstName: string, lastName: string, email: string }) => {
  const data = {
   firstName,
   lastName,
   email,
  }

  try {
   const response = await axiosWithAppId.post('/user/create', data)
   console.log("dummy user create", response.data);

   return response

  } catch (error) {
   console.log(error);
   coloredToast("error", (error as Error).message)
  }
 }



 const deleteUser = async (id: string) => {

  try {

   const response = await axiosWithAppId.delete(`/user/${id}`)
   console.log(response.data);
   coloredToast("success", 'User deleted successfull')

   return response
  } catch (error) {
   coloredToast("error", (error as Error).message)
   console.log(error);
  }
 }

 return { getUsers, deleteUser, createUserInDummyDb, getUserById, getFriendsUserPage }

}

export default useUsersCall