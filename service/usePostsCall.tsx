'use client'
import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { postSlice } from "@/lib/redux"


const usePostsCall = () => {
 const dispatch = useDispatch()
 const { axiosWithAppId } = useAxios()

 const getPosts = async () => {

  try {
   const response = await axiosWithAppId('/post')
   console.log(response.data);
   dispatch(postSlice.actions.setPosts(response.data.data))

   return response
  } catch (error) {
   console.log(error);
  }
 }

 const getPostById = async (id: string) => {


  try {
   const response = await axiosWithAppId(`/post/${id}`)



   return response
  } catch (error) {
   console.log(error);


  }

 }

 return { getPosts, getPostById }



}

export default usePostsCall