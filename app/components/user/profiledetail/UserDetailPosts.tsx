"use client"
import { Location, PostFull } from '@/types/types';
import { formatBirthDate } from '@/utils/formattedBrithDay';
import { writeLocation } from '@/utils/writeLocation';
import React, { useEffect, useState } from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbGenderBigender } from "react-icons/tb";
import { FaBirthdayCake } from "react-icons/fa";
import usePostsCall from '@/service/usePostsCall';
import { VscSettings } from "react-icons/vsc";
import { Button } from '@mui/material';
import PostCard from '../../homepage/PostCard';
import { NoDataMsg } from '../../homepage/DataFetchMsg';

interface NewUser {
 img: string;
 id: string;
 title: string;
 firstName: string;
 lastName: string;
 picture: string;
 gender: string;
 email: string;
 dateOfBirth: string; // Assuming ISO date format
 registerDate: string; // Assuming autogenerated
 updatedDate: string;
 phone: string;
 location: Location;
}

interface Props {
 nuser: NewUser
}
const UserDetailPosts = ({ nuser }: Props) => {
 const [posts, setPosts] = useState<PostFull[] | null>(null)
 const { getPostByUserId } = usePostsCall()
 useEffect(() => {

  const fetchPosts = async () => {
   const posts = await getPostByUserId(nuser.id);
   if (posts && posts.data && posts.data.data) {
    setPosts(posts.data.data);
   }
  };

  fetchPosts();
 }
  , [])
 return (
  <div className="justify-center flex flex-col items-center">
   <div className="flex  w-full max-w-[1250px] items-stretch shrink-0 ">
    {/* left-side */}
    <div className='basis-[360px] grow-[18] shrink-1 m-2 user-det-left'>
     <div className='user-intro bg-white rounded-lg p-4 shadow'>
      <div className='text-textBlack text-xl font-bold'>Intro</div>
      <div className="text-[15px] text-linkColor flex flex-col gap-4 mt-4">
       <div className="email flex items-center gap-2"><MdOutlineAlternateEmail className="text-xl" /> {nuser.email}</div>
       <div className="phone flex items-center gap-2"><FaPhone className="text-xl" /> {nuser.phone}</div>
       <div className="location flex items-center gap-2"><FaLocationDot className="text-xl" /> {writeLocation(nuser.location)}</div>
       <div className="gender flex items-center gap-2"><TbGenderBigender className="text-xl" /> {nuser.gender}</div>
       <div className="birthday flex items-center gap-2"><FaBirthdayCake className="text-xl" /> {formatBirthDate(nuser.dateOfBirth)}</div>

      </div>
     </div>
     <div className='user-photos'></div>
     <div className='user-friends'></div>
    </div>
    {/* left-side */}

    {/* right side */}
    <div className='basis-[500px] shrink-1 grow-[25] m-2 flex flex-col gap-4  user-det-right'>
     <div className='bg-white rounded-lg post-create px-4 p-2 shadow items-center flex justify-between'>
      <div className="text-xl text-textBlack font-bold">Posts</div>
      <Button className='bg-btnGraybg text-[15px] font-semibold flex gap-2  hover:bg-iconBg p-2 rounded-md '><VscSettings /> Filters</Button>
     </div>
     {!posts?.length && <NoDataMsg />}
     {
      posts && posts.map((post) => (
       <PostCard key={post.id} post={post} />
      ))
     }
    </div>
    {/* right side */}
   </div>
  </div>
 )
}

export default UserDetailPosts