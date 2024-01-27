import { DetailUSerFull, Location } from '@/types/types';
import { Button } from '@mui/material';
import Image from 'next/image'
import React from 'react'
import { BiSolidMessageRoundedDetail } from 'react-icons/bi';
import { FaChevronDown, FaUserPlus } from 'react-icons/fa6';


interface Props {
 nuser: DetailUSerFull
}
const UserDetailImage = ({ nuser }: Props) => {
 return (
  <div className='bg-white justify-center flex flex-col items-center'>
   <div className='  max-w-[1250px] justify-center flex image-info '>
    <div className='relative max-h-[462px] h-[calc((100vw)*40/100)] md:h-[calc((100vw-360px)*40/100)] rounded-b-xl  overflow-hidden'>


     {/* <Image className='object-cover rounded-b-lg' src={photoList[Math.floor(Math.random() * photoList.length)]} width={1250} height={1250} alt={user.firstName} /> */}
     <Image className='object-cover rounded-b-lg' src={nuser.img} width={1250} height={1250} alt={nuser.firstName} />
    </div>
   </div>
   <div className='flex flex-col justify-between  user-info xl:flex-row  p-2 w-full max-w-[1250px] px-4 '>

    <div className='flex flex-col xl:flex-row gap-4 items-center xl:justify-start'>
     <div className='z-10 '>
      <Image src={nuser.picture} width={168} height={168} alt={nuser.firstName} className='rounded-full border-4 border-white   -mt-[72px]' />
     </div>
     <div className='text-center mb-4 xl:text-left xl:mb-0'>
      <div className='text-[32px] font-bold text-black mt-6'>{nuser.firstName} {nuser.lastName}</div>
      <div className='text-linkColor mt-4 hover:underline cursor-pointer '>299 friends</div>
     </div>
    </div>
    <div className='flex items-end py-4 gap-2 justify-center'>
     <Button className='bg-main rounded-md  p-2 px-3 text-white flex items-center justify-center gap-2 text-[15px] cursor-pointer  font-medium'><FaUserPlus className='text-lg lg:text-2xl' /> Add Friend</Button>
     <Button className='bg-btnGraybg rounded-md  p-2 px-3 text-black flex items-center justify-center gap-2 text-[15px] cursor-pointer hover:bg-iconBg  font-medium'><BiSolidMessageRoundedDetail className='text-lg lg:text-2xl' /> Message</Button>
     <Button className='bg-btnGraybg rounded-md  p-2 px-3 text-black flex items-center justify-center gap-2 text-[15px] cursor-pointer hover:bg-iconBg  font-medium'><FaChevronDown className='text-lg lg:text-2xl' /></Button>
    </div>
   </div>
   <div className=' w-full  flex justify-between px-4   max-w-[1250px]'>
    <div className='w-full  h-[2px] bg-[#ced0d4] flex justify-between   '>

    </div>
   </div>

  </div>
 )
}

export default UserDetailImage