'use client'

import { PostSliceState, selectPost } from "@/lib/redux"
import usePostCall from "@/service/usePostCall"
import { Posts } from "@/types/postType"
import { get } from "http"
import { useEffect } from "react"
import { useSelector } from "react-redux"


const PostList = () => {
 // const { getPost } = usePostCall()
 // const post: PostSliceState = useSelector(selectPost)

 // useEffect(() => {
 //  getPost()
 // }, [])
 // console.log(post.data.data);

 // if (post.loading) {
 //  return <div>Loading...</div>
 // }
 // if (post.data.data.length === 0) {
 //  return <div>No data</div>

 // }


 return (
  <div>
   {/* {post.data.data[0].map((item, index) => {
    return (
     <div key={index}>
      <h1>{item.text}</h1>
      <p></p>
     </div>
    )
   }
   )} */}
  </div>
 )
}

export default PostList