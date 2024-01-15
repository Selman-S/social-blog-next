"use client"

import usePostsCall from "@/service/usePostsCall"
import { Post } from "@/types/types"
import { Button, Skeleton } from "@mui/material"
import { useEffect, useState } from "react"




const PostDetailPage = ({ params }: { params: { post: string } }) => {

  const [post, setPost] = useState({} as Post)
  const { getPostById } = usePostsCall()



  useEffect(() => {
    (async () => {
      const post = await getPostById(params.post)
      setPost(post?.data)


    })();

  }, [])

  if (!post.text) return (
    <Skeleton variant="rectangular" width={210} height={118} />)
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10">

        <img src={post.image} alt={post.text} className="w-1/2 h-1/2" />
        <h1 className="text-2xl font-bold mt-5">{post.owner.firstName + ' ' + post.owner.lastName}</h1>
        <p className="text-sm text-gray-500">{post.publishDate}</p>
        <p className="text-lg mt-5">{post.text}</p>
      </div>

    </div>
  )
}

export default PostDetailPage