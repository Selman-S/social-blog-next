'use client'
import * as React from 'react';
import { Post } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import usePostsCall from '@/service/usePostsCall';
export default function PostCard({ post }: { post: Post }) {

 const { deletePost } = usePostsCall()




 return (
  <div className=''>
   <Image src={post.owner?.picture} alt={post.owner?.firstName} width={40} height={40} />
   <Image
    src={post.image}
    width={345}
    height={200}
    alt={post.text}
   />
   <div>
    <div >
     {post.text}
    </div>
   </div>
   <div >
    <Link href={`/posts/${post.id}`}>
     Düzenle
    </Link>
    <button onClick={() => deletePost(post.id)} >
     Sil
    </button>

   </div>

  </div >
 );
}