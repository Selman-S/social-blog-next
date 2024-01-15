'use client'
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useAuthCall from '@/service/useAuthCall';

const loginSchema = yup.object({
 email: yup.string()
  .email("Please enter a valid email address").matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email address")
  .required("Email is required"),
 password: yup.string()
  .required("Password is required.")
  .min(8, "Password must be at least 8 characters long")
  .max(16, "Password must not exceed 16 characters")
  .matches(/\d+/, "Password must contain at least one digit")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
 // displayname: yup.string().required("Name is required.").min(3, "Name must be at least 3 characters long"),
});

type FormData = yup.InferType<typeof loginSchema>;

const LoginForm = () => {
 const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
  resolver: yupResolver(loginSchema)
 });

 const { registerWithEmail, signIn, signUpWithGoogle } = useAuthCall();

 const onSubmit = (data: FormData, event: React.FormEvent) => {
  event.preventDefault();
  signIn(data.email, data.password)

 }


 const all = watch();
 console.log(all);


 return (
  <form className="space-y-5 "
   onSubmit={handleSubmit((data, event) => onSubmit(data, event as React.FormEvent))}
  >

   <input
    className='p-2 border rounded-lg  border-borderGray w-full'
    required
    id="email"
    placeholder="Email Address"
    {...register("email")}

    autoFocus />

   {/* <input
    className='p-2 border rounded-lg  border-borderGray w-full'
    required
    id="displayname"
    placeholder="Name"
    {...register("displayname")}

   /> */}

   <input
    required
    className='p-2 border rounded-lg border-borderGray w-full'
    {...register("password")}
    placeholder="Password"
    type="password"
    id="password"
   />



   <button type="submit" className="btn bg-main p-2 rounded-lg mt-6 font-bold text-white  w-full">
    SIGN IN
   </button>
   <div className='text-red h-4 '>

    <div >{errors.email?.message}</div>
    <div>{errors.password?.message}</div>
   </div>
  </form>
 )
}

export default LoginForm