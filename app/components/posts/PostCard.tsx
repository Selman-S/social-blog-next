import { Post } from '@/types/types'
import { Button, Card, CardContent } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UserDeleteButton from '../users/UserDeleteButton'
interface PostCardProps {
 post: Post
}
const PostCard = ({ post }: PostCardProps) => {
 return (
  <Card  className='rounded-lg '>

   <Link href={`/users/${post.id}`} className='cursor-pointer'>
    {post.image ?

     <Image

      src={post?.image}
      width={240}
      height={240}
      alt={post.text}
     />
     :
     <Image
      src='/assets/defaultprf.png'
      width={240}
      height={240}
      alt="default icon"
     />
    }
   </Link>

   <CardContent className="h-12 p-2">
    <div className='text-[14px] md:text-[17px] text-[#050505] font-semibold'>
     {post.text}
    </div>
   </CardContent>
   <div className='p-2 md:p-4 flex flex-col gap-2'>
    <Button size="small" color="primary" className='p-2 px-4 bg-btnbg text-btnText hover:bg-btnbgHover'>

     <Link href={`/posts/${post.id}`}>
      View profile
     </Link>
    </Button>
    <UserDeleteButton userId={post.id} />


   </div>

  </Card >
 )
}

export default PostCard