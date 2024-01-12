'use client'

import { selectPost } from "@/lib/redux"
import { Posts } from "@/types/postType"
import { useEffect } from "react"
import { useSelector } from "react-redux"


const PostList = () => {

 const post: Posts = useSelector(selectPost)
 useEffect(() => {


 }
  , [post])


 return (
  <div>
   {post.data.map((item, index) => {
    return (
     <div key={index}>
      <h1>{item.text}</h1>
      <p>{item.owner.firstName}</p>
     </div>
    )
   }
   )}
  </div>
 )
}

export default PostList