'use client'

import { selectPost } from "@/lib/redux"
import useUsersCall from "@/service/useUsersCall"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import UserCard from "./UserCard"
import { selectUser } from "@/lib/redux/slices/userSlice"


const UserList = () => {
 const users = useSelector(selectUser);

 const { getUsers } = useUsersCall()
 useEffect(() => {
  getUsers()
  console.log(users);

 }, [])



 return (
  <div className="mt-12 flex flex-wrap justify-center mx-auto gap-8">
   user
   {users.data.map((user) => (
    <UserCard user={user} key={user.id} />
   ))}
  </div>
 )
}

export default UserList