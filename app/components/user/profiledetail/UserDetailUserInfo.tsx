import { Button } from '@mui/material'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaCaretDown } from 'react-icons/fa6'

const UserDetailUserInfo = () => {
 return (
  <div className='bg-white justify-center flex flex-col items-center shadow'>
   <div className='  flex justify-between  items-center p-2 w-full max-w-[1250px] px-2 lg:px-4'>
    <div>
     <Button className='text-linkColor text-[15px]  font-semibold hover:bg-[#f2f2f2] px-2 lg:p-3 xl:p-4 rounded-md '>Posts</Button>
     <Button className='text-linkColor text-[15px] font-semibold hover:bg-[#f2f2f2] px-2 lg:p-3 xl:p-4 rounded-md '>About</Button>
     <Button className='text-linkColor text-[15px] font-semibold hover:bg-[#f2f2f2] px-2 lg:p-3 xl:p-4 rounded-md '>Friends</Button>
     <Button className='text-linkColor hidden md:inline-block text-[15px] font-semibold hover:bg-[#f2f2f2] px-2 lg:p-3 xl:p-4 rounded-md '>Photos</Button>
     <Button className='text-linkColor hidden lg:inline-block text-[15px] font-semibold hover:bg-[#f2f2f2] px-2 lg:p-3 xl:p-4 rounded-md '>Videos</Button>
     <Button className='text-linkColor hidden xl:inline-block text-[15px] font-semibold hover:bg-[#f2f2f2] px-2 lg:p-3 xl:p-4 rounded-md '>Check-ins</Button>
     <Button className='text-linkColor  text-[15px] font-semibold hover:bg-[#f2f2f2] px-2 lg:p-3 xl:p-4 rounded-md '>More <FaCaretDown /></Button>
    </div>
    <div>
     <Button className='bg-btnGraybg text-xl font-semibold hover:bg-iconBg p-2 px-1 rounded-md '><BsThreeDots /></Button>
    </div>
   </div>
  </div>
 )
}

export default UserDetailUserInfo