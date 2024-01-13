'use client'

import { selectPost } from "@/lib/redux"
import usePostsCall from "@/service/usePostsCall"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import PostCard from "./PostCard"


const PostList = () => {
 const posts = useSelector(selectPost);

 const { getPosts } = usePostsCall()
 useEffect(() => {
  getPosts()
  console.log(posts);

 }, [])



 return (
  <div className="mt-12 flex flex-wrap justify-center mx-auto gap-8">
   {posts.data.map((post) => (
    <PostCard post={post} key={post.id} />
   ))}
  </div>
 )
}

export default PostList