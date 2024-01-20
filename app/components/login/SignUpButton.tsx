"use client"
import React, { useState } from 'react'
import SignupModal from './SignupModal'

const SignUpButton = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    console.log('sdsa');

    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button onClick={handleOpen} className="btn text-white p-2 px-6  rounded-lg bg-btnGreen font-bold  hover:underline ltr:ml-1 rtl:mr-1">
        Sign Up
      </button>
      <SignupModal open={open} handleClose={handleClose} />
    </>
  )
}

export default SignUpButton