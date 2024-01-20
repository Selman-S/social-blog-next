'use client'
import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { postSlice } from "@/lib/redux"
import { PostCreate } from "@/types/types"
import { coloredToast } from "@/lib/sweetalertToast/config"
import { get } from "http"

// Get List,
// Get List By User, Get List By Tag, Get Post By Id,
// Create Post, Update Post, Delete Post
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
 const getTags = async () => {

  try {
   const response = await axiosWithAppId(`/tag`)
   console.log(response.data);

   return response
  } catch (error) {
   console.log(error);
  }
 }

 const getPostByUserId = async (id: string) => {

  try {
   const response = await axiosWithAppId(`/user/${id}/post`)
   console.log(response)

   dispatch(postSlice.actions.setPosts(response.data.data))
   return response
  } catch (error) {
   console.log(error);
  }
 }

 const createPost = async (post: PostCreate) => {

  try {
   const response = await axiosWithAppId.post(`/post/create`, post)
   console.log(response.data);
   coloredToast("success", 'Post created successfully')
   return response
  } catch (error) {
   console.log(error);
   coloredToast("error", 'Post could not be created')
  }
 }

 const deletePost = async (id: string) => {

  try {
   const response = await axiosWithAppId.delete(`/post/${id}`)
   console.log(response.data);
   coloredToast("success", 'Post deleted successfully')
   getPosts()

   return response
  } catch (error) {
   console.log(error);
   coloredToast("error", 'Post could not be deleted')
  }
 }

 return { getPosts, getPostById, createPost, deletePost, getPostByUserId, getTags }

}

export default usePostsCall