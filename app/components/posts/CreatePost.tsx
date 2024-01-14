"use client"
import usePostsCall from '@/service/usePostsCall'
import { PostCreate } from '@/types/types'
import React, { useState } from 'react'

const CreatePost = () => {
 const [post, setPost] = useState<PostCreate>({
  text: '',
  image: '',
  likes: 0,
  tags: [],
  owner: '',
 })

 const { createPost } = usePostsCall()

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log(post);
  createPost(post)
 }

 return (
  <div>
   <form onSubmit={handleSubmit}>
    <input type="text" placeholder="text" onChange={(e) => setPost({ ...post, text: e.target.value })} />
    <input type="text" placeholder="image" onChange={(e) => setPost({ ...post, image: e.target.value })} />
    <input type="number" placeholder="likes" onChange={(e) => setPost({ ...post, likes: +e.target.value })} />
    <input type="text" placeholder="tags" onChange={(e) => setPost({ ...post, tags: e.target.value.split(',') })} />
    <input type="text" placeholder="owner" onChange={(e) => setPost({ ...post, owner: e.target.value })} />
    <button type="submit">Submit</button>
   </form>
  </div>
 )
}

export default CreatePost