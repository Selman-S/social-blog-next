import useUsersCall from '@/service/useUsersCall'
import { Button } from '@mui/material'
import React from 'react'

interface UserDeleteButtonProps {
 userId: string
}

const UserDeleteButton = ({ userId }: UserDeleteButtonProps) => {
 const { deleteUser, getUsers } = useUsersCall()

 const handleDelete = () => {
  console.log("delete", userId);
  deleteUser(userId)
  getUsers()
 }
 return (
  <Button onClick={handleDelete} size="small" color="secondary" className='p-2 px-4 bg-btnGraybg hover:bg-[#D8DADF] text-textBlack'>
   Delete
  </Button>
 )
}

export default UserDeleteButton