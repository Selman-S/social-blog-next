import React from 'react'
import { FaBirthdayCake } from 'react-icons/fa'
import { FaClipboardUser, FaUserCheck, FaUserGroup, FaUserPlus, FaUsersGear } from 'react-icons/fa6'
import { IoIosArrowForward, IoIosSettings } from 'react-icons/io'
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { PiVideoFill } from "react-icons/pi";
import { PiFilmSlateBold } from "react-icons/pi";
import { FaFileArrowDown } from "react-icons/fa6";

import { BsRocketTakeoffFill } from "react-icons/bs";



const menuItems = [
 {
  id: 1,
  name: 'Home',
  icon: <MdOutlineVideoLibrary />
 },
 {
  id: 2,
  name: 'Live',
  icon: <RiLiveFill />
 },
 {
  id: 3,
  name: 'Reels',
  icon: <PiVideoFill />
 },
 {
  id: 4,
  name: 'Shows',
  icon: <PiFilmSlateBold />
 },
 {
  id: 5,
  name: 'Explore',
  icon: <BsRocketTakeoffFill />
 },
 {
  id: 6,
  name: 'Saved videos',
  icon: <FaFileArrowDown />
 },
]
const PostsLeftSide = () => {
 return (
  <>
   <div className="hidden md:block w-[360px] fixed top-20 left-0 min-h-[calc(100vh-80px)] bg-white">
    <div className='p-4'>

     <div className='flex justify-between'>
      <div className='font-bold text-2xl text-textBlack flex items-center'>Posts</div>
      <div className='flex justify-content-end items-center p-2 rounded-full bg-loginbg hover:bg-iconBg  text-[24px] cursor-pointer'>
       <IoIosSettings />
      </div>
     </div>
     <div className='menu-items flex flex-col mt-4'>
      {menuItems.map((item, i) => (
       <div key={item.id} className={`flex items-center p-2 rounded-lg  hover:bg-loginbg  text-[24px] cursor-pointer ${i == 0 && "bg-loginbg"} `}>
        <div className='flex items-center justify-between w-full'>
         <div className='flex items-center '>

          <div className={`mr-4 flex justify-center items-center p-2 text-xl bg-btnGraybg rounded-full ${i == 0 && "bg-main text-white"} `}>{item.icon}</div>
          <div className='text-[17px] font-medium'>{item.name}</div>
         </div>
         {i !== 0 &&

          <div className='text-[17px] font-medium'><IoIosArrowForward /></div>
         }
        </div>
       </div>
      )

      )}
     </div>
    </div>
   </div>
   <div className="hidden md:block  min-w-[360px]  top-20 left-0 min-h-[calc(100vh-80px)] "></div>
  </>
 )
}

export default PostsLeftSide