import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { useSelector } from 'react-redux'
import { selectUser } from '@/lib/redux/slices/userSlice'
import useAuthCall from '@/service/useAuthCall'



const userCreateSchema = yup.object({
 firstName: yup.string().required("Firstname is required"),
 lastName: yup.string().required("Lastname is required"),
 email: yup.string().email("Please enter a valid email").required("Email is required"),
 password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),

});

type FormData = yup.InferType<typeof userCreateSchema>;



const SignupModal = ({ open, handleClose }: { open: boolean, handleClose: () => void }) => {

 const { currentUser } = useSelector(selectUser)
 const { registerWithEmail } = useAuthCall()

 const { register, handleSubmit, watch, control, formState: { errors }, setValue, clearErrors } = useForm<FormData>({
  resolver: yupResolver(userCreateSchema)
 });

 const onSubmit = (data: FormData, event: React.FormEvent) => {

  console.log('sdsa');
  event.preventDefault();

  registerWithEmail(data.email, data.password, data.firstName, data.lastName)

  modalClose()

 }

 const modalClose = () => {

  setValue("firstName", "")
  setValue("lastName", "")
  setValue("email", "")
  setValue("password", "")
  handleClose()
  console.log(errors);
  clearErrors("email")
  clearErrors("password")
  clearErrors("firstName")
  clearErrors("lastName")


 }
 const all = watch();
 console.log(all);

 return (
  <Modal
   open={open}
   onClose={modalClose}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"


  >
   <Box className=' absolute -translate-x-2/4 -translate-y-2/4 w-[500px] bg-[#fff] shadow-[0px_0px_24px_rgba(0,0,0,0.2)] rounded-lg left-2/4 top-2/4' >
    <div onClick={modalClose} className="absolute w-10 h-10 flex items-center justify-center top-4 right-4 cursor-pointer hover:bg-[#d5d5d5] rounded-full bg-userLinkHover">
     <Image src="/assets/Vector.png" width="20" height="20" alt="cross icon" />
    </div>
    <Typography id="modal-modal-title" className="text-center p-5 mb-4 border-b-[1px] border-b-[#bbb] text-[20px] font-bold" variant="h6" component="h2">
     Create User
    </Typography>

    <Box
     sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 4 }}
     component={"form"}
     onSubmit={handleSubmit((data, event) => onSubmit(data, event as React.FormEvent))}
    >


     <input
      className={`p-3 text-xl border rounded-lg  border-borderGray w-full ${errors.firstName && 'border-red'}`}
      required
      id="firstName"
      placeholder="firstName"
      {...register("firstName")}

      autoFocus />
     {errors.firstName && <span className='text-red'>{errors.firstName.message}</span>}


     <input
      className={`p-3 text-xl border rounded-lg  border-borderGray w-full ${errors.lastName && 'border-red'}`}
      required
      id="lastName"
      placeholder="Lastname"
      {...register("lastName")}

     />
     {errors.lastName && <span className='text-red'>{errors.lastName.message}</span>}
     <input
      className={`p-3 text-xl border rounded-lg  border-borderGray w-full ${errors.email && 'border-red'}`}
      required
      id="email"
      placeholder="email"
      {...register("email")}
     />
     {errors.email && <span className='text-red'>{errors.email.message}</span>}

     <input
      className={`p-3 text-xl border rounded-lg  border-borderGray w-full ${errors.password && 'border-red'}`}
      required
      id="password"
      placeholder="password"
      {...register("password")}
     />
     {errors.password && <span className='text-red'>{errors.password.message}</span>}





     <Button type="submit" className="p-3 text-[15px] text-white font-semibold rounded-md bg-linkGreen w-full" color="success" >
      Sign Up
     </Button>
    </Box>
   </Box>
  </Modal>
 )
}

export default SignupModal