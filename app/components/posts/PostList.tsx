'use client'

import { postSlice, selectPost } from "@/lib/redux"
import usePostsCall from "@/service/usePostsCall"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PostCard from "./PostCard"


const PostList = () => {
 const { getPosts } = usePostsCall()
 const posts = useSelector(selectPost);

 // const { getPosts } = usePostsCall()
 useEffect(() => {
  //  getPosts()
  const data = getPosts()
  console.log(data);

 }, [])



 return (
  <div className="w-[500px]">
   {posts?.data.map((post) => (
    <PostCard post={post} key={post.id} />
   ))}
  </div>
 )
}

export default PostList