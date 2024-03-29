"use client"
import { selectPost } from '@/lib/redux'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../homepage/PostCard'
import CreatePostHomePage from '../homepage/CreatePost'
import SerachPost from './SerachPost'
import useTagsCall from '@/service/useTagsCall'

const PostsCards = () => {
 const posts = useSelector(selectPost).data
 const [filteredPosts, setFilteredPosts] = useState(posts)


 return (
  <>
   <div className=" md:w-[calc(100vw-440px)]">

   </div>
   <div className="md:flex gap-2  max-w-[680px] mt-4 mx-2 flex md:mx-8 flex-col  md:gap-4 flex-wrap m-2 md:m-4  justify-center md:justify-start">
    <CreatePostHomePage />
    <SerachPost setFilteredPosts={setFilteredPosts} />

    {filteredPosts.map((post) => (
     <PostCard post={post} key={post.id} />
    ))}
   </div>
  </>
 )
}

export default PostsCards