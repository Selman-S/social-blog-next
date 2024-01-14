"use client"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Alert, Button, Grid, Input, TextField, Typography } from '@mui/material';
import GoogleIcon from "@mui/icons-material/Google";
import Link from 'next/link';
import { Card } from '@mui/material';

const LoginCover = () => {
 const dispatch = useDispatch();

 const router = useRouter();

 const submitForm = (e: any) => {
  e.preventDefault();
  router.push('/');
 };
 const errorMessage = ''
 const isAuthenticating = false
 return (
  <div className="min-h-screen text-black dark:text-white-dark bg-bg">


   <div className="flex min-h-screen max-w-[980px] mx-auto ">
    <div className="hidden min-h-screen w-1/2 flex-col  items-center justify-center p-4 text-white dark:text-black lg:flex ">
     <div className="mx-auto mb-5 w-full text-main text-3xl font-bold">
      <h3>socialblog</h3>
     </div>
     <p className="mb-4   text-xl ">Communicate with your friends and share what's going on in your life with Socialblog.</p>
    </div>
    <div className="relative flex w-full items-center justify-center lg:w-1/2">
     <Card sx={{ borderRadius: '8px' }} className='loginbox'>


      <div className="max-w-[480px] p-5">
       {/* <form className="space-y-5" onSubmit={submitForm}>
        <div>
         <Input id="email" type="email" className="form-input" placeholder="Enter Email" />
        </div>
        <div>
         <Input id="password" type="password" className="form-input" placeholder="Enter Password" />
        </div>
        <div>
         <label className="cursor-pointer">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-white-dark">Remember me</span>
         </label>
        </div>
        <button type="submit" className="btn btn-primary w-full">
         SIGN IN
        </button>
       </form> */}
       <form
        // onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
       >
        <Grid container>
         <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
           label="email"
           type="email"
           placeholder="enter your email"
           fullWidth
           name="email"
          // value={email}
          // onChange={onInputChange}
          />
         </Grid>

         <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
           label="password"
           type="password"
           placeholder="************"
           fullWidth
           name="password"
          // value={password}
          // onChange={onInputChange}
          />
         </Grid>
         <Grid container sx={{ mt: 1 }} display={!!errorMessage ? "" : "none"}>
          <Grid item xs={12}>
           <Alert severity="error">{errorMessage}</Alert>
          </Grid>
         </Grid>
         <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
           <Button
            disabled={isAuthenticating}
            type="submit"
            variant="contained"
            fullWidth
           >
            Login
           </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
           <Button
            disabled={isAuthenticating}
            // onClick={onGoogleSignIn}
            variant="contained"
            fullWidth
           >
            <GoogleIcon />
            <Typography sx={{ ml: 1 }}>Google</Typography>
           </Button>
          </Grid>
         </Grid>
         <Grid container direction="row" justifyContent="end">
          {/* <Link component={RouterLink} color="inherit" to="/auth/register">
           Crear una cuenta
          </Link> */}
         </Grid>
        </Grid>
       </form>
       <div className="relative my-7 h-5 text-center before:absolute before:inset-0 before:m-auto before:h-[1px] before:w-full before:bg-[#ebedf2]  dark:before:bg-[#253b5c]">
        <div className="relative z-[1] inline-block bg-[#fafafa] px-2 font-bold text-white-dark dark:bg-[#060818]">
         <span>OR</span>
        </div>
       </div>
       <ul className="mb-5 flex justify-center gap-2 sm:gap-5">
        <li>
         <button
          type="button"
          className="btn flex gap-1 bg-white-dark/30 text-black shadow-none hover:bg-white dark:border-[#253b5c] dark:bg-transparent dark:text-white dark:hover:bg-[#1b2e4b] sm:gap-2 "
         >

          Google
         </button>
        </li>
        <li>
         <button
          type="button"
          className="btn flex gap-1 bg-white-dark/30 text-black shadow-none hover:bg-white dark:border-[#253b5c] dark:bg-transparent dark:text-white dark:hover:bg-[#1b2e4b] sm:gap-2"
         >

          Github
         </button>
        </li>
        <li>
         <button
          type="button"
          className="btn flex gap-1 bg-white-dark/30 text-black shadow-none hover:bg-white dark:border-[#253b5c] dark:bg-transparent dark:text-white dark:hover:bg-[#1b2e4b] sm:gap-2"
         >

          Twitter
         </button>
        </li>
       </ul>
       <p className="text-center">
        Dont&apos;t have an account ?
        <Link href="/auth/cover-register" className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
         Sign Up
        </Link>
       </p>
      </div>
     </Card>
    </div>

   </div>
   <div className=''>

   </div>
  </div>


 );
};

export default LoginCover;