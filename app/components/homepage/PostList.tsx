'use client'
import { selectPost } from "@/lib/redux"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PostCard from "./PostCard"
import { PostCreate } from "@/types/types"
import CreatePostHomePage from "./CreatePost"
import CreatePostModal from "./CreatePostModal"
import { CardSkeleton, ErrorMsg, NoDataMsg } from "./DataFetchMsg"
import { selectUser } from "@/lib/redux/slices/userSlice"
import { Grid } from "@mui/material"
import usePostsCall from "@/service/usePostsCall"




const PostList = () => {
 const posts = useSelector(selectPost);

 const { getPosts } = usePostsCall()

 useEffect(() => {
  getPosts()
 }, [])

 return (
  <div className="max-w-[680px] mt-4 mx-2 flex md:mx-8 flex-col gap-4">

   <CreatePostHomePage />
   {posts.error && <ErrorMsg />}
   {posts.data.map((post) => (
    <PostCard post={post} key={post.id} />
   ))}

   {posts.loading && (
    <CardSkeleton />
   )}
   {!posts.loading && !posts?.data.length && <NoDataMsg />}

   {!posts.loading && posts?.data?.length > 0 && (
    <Grid container justifyContent={"center"} gap={2} mt={4}>
     {posts?.data?.map((post) => (
      <PostCard post={post} key={post.id} />

     ))}
    </Grid>
   )}


  </div>
 )
}

export default PostList