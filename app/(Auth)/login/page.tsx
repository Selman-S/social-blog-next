
import LoginForm from '@/app/components/login/LoginForm';
import GoogleButton from '@/app/components/login/GoogleButton';
import SignUpButton from '@/app/components/login/SignUpButton';


const LoginCover = () => {


 return (
  <div className="min-h-screen text-black dark:text-white-dark bg-loginbg">


   <div className="flex min-h-screen max-w-[980px] mx-auto ">
    <div className="hidden min-h-screen w-1/2 flex-col  items-center justify-center p-4 text-white dark:text-black lg:flex ">
     <div className="mx-auto mb-5 w-full text-main text-5xl font-bold">
      <h3>socialblog</h3>
     </div>
     <p className="mb-4   text-2xl text-black">Communicate with your friends and share what's going on in your life with Socialblog.</p>
    </div>
    <div className="relative flex w-full items-center justify-center lg:w-1/2">
     <div className='loginbox w-[350px] sm:w-[396px]'>


      <div className="max-w-[480px] p-5">
       <LoginForm />


       <ul className="my-5  flex justify-center gap-2 sm:gap-5">
        <li className='w-full '>
         <GoogleButton />
        </li>

       </ul>
       <div className="relative my-4 h-5 text-center before:absolute before:inset-0 before:m-auto before:h-[1px] before:w-full before:bg-[#ebedf2]  dark:before:bg-[#253b5c]">
        <div className="relative z-[1] inline-block bg-[#fafafa] px-2 font-bold text-white-dark dark:bg-[#060818]">
         <span>OR</span>
        </div>
       </div>
       <div className="text-center">
        Dont&apos;t have an account ?
        <div className='mt-5'>

         <SignUpButton />
        </div>
       </div>
      </div>
     </div>
    </div>

   </div>

  </div>


 );
};

export default LoginCover;