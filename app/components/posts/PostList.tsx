'use client'
import { postSlice, selectPost } from "@/lib/redux"
import usePostsCall from "@/service/usePostsCall"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PostCard from "./PostCard"
import { Post } from "@/types/types"



const PostList = () => {
 const { getPosts } = usePostsCall()
 const posts = useSelector(selectPost);


 useEffect(() => {
  getPosts()
  console.log("posts", posts)
 }, [])

 if (posts.error) {
  return <div>Error</div>

 }
 if (posts.loading) {
  return <div>Loading...</div>

 }
 if (posts.data.length === 0) {
  return <div>No data</div>

 }


 return (
  <div className="w-[500px] mt-4 flex flex-col gap-4">
   {posts.data.map((post) => (
    <PostCard post={post} key={post.id} />
   ))}
  </div>
 )
}

export default PostList