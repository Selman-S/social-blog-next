'use client'
import { postSlice, selectPost } from "@/lib/redux"
import usePostsCall from "@/service/usePostsCall"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PostCard from "./PostCard"
import { Post } from "@/types/types"
import CreatePostHomePage from "./CreatePost"



const PostList = () => {
 const { getPosts, getTags } = usePostsCall()
 const posts = useSelector(selectPost);


 useEffect(() => {
  getPosts()
  getTags()
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
  <div className="max-w-[590px] mt-4 flex mx-8 flex-col gap-4">
   <CreatePostHomePage />
   {posts.data.map((post) => (
    <PostCard post={post} key={post.id} />
   ))}
  </div>
 )
}

export default PostList