import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import CreatePostModal from './CreatePostModal'

const CreatePostHomePage = () => {
 const [open, setOpen] = useState(false)
 const handleOpen = () => setOpen(true)

 const handleClose = () => {
  setOpen(false)
 }

 return (
  <>
   <Card onClick={handleOpen} className='p-2 h-[73px] rounded-lg'>
    <div className='rounded-ld p-2 w-full cursor-pointer  hover:bg-[#f2f2f2] transition-all flex items-center h-full'>
     <div className='flex justify-center items-center w-10 h-10 me-2 bg-[#EBF5FF] rounded-full'>
      <Image src='/assets/create.png' alt='plus icon' width={14} height={14} />
     </div>
     <Box className='flex-1'>

      <Typography variant='h6' className='ml-2 text-[17px] text-[050505] font-semibold'>
       Create Post
      </Typography>

      <div className='ml-2'>
       Share a photo or write something.
      </div>
     </Box>
    </div>
   </Card>
   <CreatePostModal
    open={open}
    handleClose={handleClose}
   />
  </>
 )
}

export default CreatePostHomePage