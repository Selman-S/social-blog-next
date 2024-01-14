'use client'
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const loginSchema = yup.object({
 email: yup.string().required(),
 password: yup.number().positive().integer().required(),
}).required();
type FormData = yup.InferType<typeof loginSchema>;

const LoginForm = () => {
 const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
  resolver: yupResolver(loginSchema)
 });

 const onSubmit = (data: FormData) => {
  data.preventDefault()
  console.log(data);
 }
 const all = watch();
 console.log(all);


 return (
  <form className="space-y-5 "
   onSubmit={onSubmit}
  >

   <input
    className='p-2 border rounded-lg border-borderGray w-full'
    required
    id="email"
    placeholder="Email Address"
    {...register("email")}

    autoFocus />

   <p>{errors.email?.message}</p>
   <input
    required
    className='p-2 border rounded-lg border-borderGray w-full'
    {...register("password")}
    placeholder="Password"
    type="password"
    id="password"
   />

   <p>{errors.password?.message}</p>

   <button type="submit" className="btn bg-main p-2 rounded-lg font-bold text-white  w-full">
    SIGN IN
   </button>
  </form>
 )
}

export default LoginForm