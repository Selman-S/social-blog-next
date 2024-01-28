"use client"

import { selectUser } from "@/lib/redux/slices/userSlice"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const RedirectMyPosts = () => {
 
const router = useRouter()
 const curretuser = useSelector(selectUser).currentUser
 console.log(curretuser);
 useEffect(() => {

  if (curretuser) {
   router.replace(`/users/${curretuser.uid}`)
  }else {
   router.replace('/login')
  
  }
 }, [curretuser])

 return (
  <div></div>
 )
}

export default RedirectMyPosts