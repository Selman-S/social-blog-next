import Image from 'next/image'
import React from 'react'
import { IoIosSettings } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const menuItems = [
 {
  id: 1,
  name: 'Home',
  icon: <FaUserGroup />
 },
 {
  id: 2,
  name: 'Friend requests',
  icon: <FaUserCheck />
 },
 {
  id: 3,
  name: 'Suggestions',
  icon: <FaUserPlus />
 },
 {
  id: 4,
  name: 'All Friends',
  icon: <FaUsersGear />
 },
 {
  id: 5,
  name: 'Birthdays',
  icon: <FaBirthdayCake />
 },
 {
  id: 6,
  name: 'Custom lists',
  icon: <FaClipboardUser />
 },
]
const UserLeftSide = () => {
 return (
  <>


   <div className="hidden md:block min-w-[360px] fixed top-20 left-0 min-h-[calc(100vh-80px)] bg-white">
    <div className='p-4'>

     <div className='flex justify-between'>
      <div className='font-bold text-2xl text-textBlack flex items-center'>Friends</div>
      <div className='flex justify-content-end items-center p-2 rounded-full bg-loginbg hover:bg-iconBg  text-[24px] cursor-pointer'>
       <IoIosSettings />
      </div>
     </div>
     <div className='menu-items flex flex-col mt-4'>
      {menuItems.map((item, i) => (
       <div className={`flex items-center p-2 rounded-lg  hover:bg-loginbg  text-[24px] cursor-pointer ${i == 0 && "bg-loginbg"} `}>
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

export default UserLeftSide