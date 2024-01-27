"use client"
import { Location } from '@/types/types'
import { Button } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import StickyBox from "react-sticky-box";


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
const StickyProfileBar = ({ nuser }: Props) => {
 const [isSticky, setSticky] = useState(false);
 const ref = useRef<HTMLDivElement>(null);


 const changeBgColor = () => {
  if (ref.current && ref.current.getBoundingClientRect().top - 76 < 0) {
   setSticky(true)
  } else {
   setSticky(false)
  }

 }

 useEffect(() => {
  changeBgColor()
  console.log(isSticky);


  // adding the event when scroll change
  window.addEventListener('scroll', changeBgColor)

 })

 return (
  <StickyBox offsetTop={76} className={`h-0 overflow-hidden stickybox transition-all duration-500 ${isSticky ? 'h-[72px]' : ''}`}>

   <div className={`justify-center flex flex-col items-center profile-bar`} ref={ref} >
    <div className="flex justify-between items-center p-2 w-full z-100 bg-white shadow">
     <Button className="	flex gap-2 items-center  p-2 rounded-lg hover:bg-btnGraybg">

      <div className="w-10 h-10 overflow-hidden rounded-full	flex justify-center items-center  ">
       {nuser &&
        <Image className='rounded-full ' src={nuser.picture} width={40} height={40} alt={nuser?.firstName} />
       }
      </div>
      <div className='text-[17px] font-semibold text-textBlack '>{nuser.firstName} {nuser.lastName}</div>

     </Button>
     <Button className='bg-btnGraybg text-xl font-semibold hover:bg-iconBg p-2 px-1 rounded-md '><BsThreeDots /></Button>
    </div>
   </div>
  </StickyBox>
 )
}

export default StickyProfileBar