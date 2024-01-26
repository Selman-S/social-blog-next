"use client"
import { UserFull } from '@/types/types'
import { Button, getOffsetTop } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import StickyBox from "react-sticky-box";
import { useInView } from 'react-intersection-observer';


interface NewUser extends UserFull {
 img: string

}

interface Props {
 nuser: NewUser
}
const StickyProfileBar = ({ nuser }: Props) => {
 const [isSticky, setSticky] = useState(false);
 // const ref = useRef(null);
 // const { height } = ref?.current?.getBoundingClientRect() || {};
 // const { ref: inViewRef, inView } = useInView({
 //  threshold: 0,
 // });
 // useEffect(() => {
 //  const handleScroll = () => {
 //   const offset = getOffsetTop(ref.current,"top");
 //   if (offset < window.pageYOffset) {
 //    setSticky(true);
 //   } else {
 //    setSticky(false);
 //   }
 //  };

 //  window.addEventListener("scroll", handleScroll);

 //  return () => {
 //   window.removeEventListener("scroll", () => handleScroll);
 //  };
 // }, []);



 return (
  <StickyBox offsetTop={76} >

   <div className={`justify-center flex flex-col items-center profile-bar`} >
    <div className="flex justify-between items-center p-2 w-full max-w-[1250px] bg-white shadow">
     <Button className="	flex gap-2 items-center  p-2 rounded-lg hover:bg-btnGraybg">

      <div className="w-10 h-10 overflow-hidden rounded-full	flex justify-center items-center  ">
       {nuser &&
        <Image className='rounded-full ' src={nuser.picture} width={40} height={40} alt={nuser?.firstName} />
       }
      </div>
      <div className='text-[17px] font-semibold text-textBlack '>{nuser.firstName} {nuser.lastName}</div>

     </Button>
    </div>
   </div>
  </StickyBox>
 )
}

export default StickyProfileBar