
import { IoSearch } from "react-icons/io5";

import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link'
const pages = [
 { name: 'Home', path: '/' },
 { name: 'Users', path: '/users' },
 { name: 'Posts', path: '/posts' },

];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {


 return (
  <nav className="navbar appbar bg-white">
   <div className='container mx-auto'>
    <div className='toolbar'>
     <Image src='/assets/socialblog_logo.png' alt='socialblog logo' width={50} height={50} />
     <div className='typography'
     >
      {/* variant="h6"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
       mr: 2,
       display: { xs: 'none', md: 'flex' },
       fontFamily: 'monospace',
       fontWeight: 700,
       letterSpacing: '.3rem',
       color: 'inherit',
       textDecoration: 'none',
      }} */}
      LOGO
     </div>

     <div className='box'

     // sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
     >
      {/* <IconButton
       size="large"
       aria-label="account of current user"
       aria-controls="menu-appbar"
       aria-haspopup="true"
       onClick={handleOpenNavMenu}
       color="inherit"
      >
       <MenuIcon />
      </IconButton> */}
      <IoMenu />
      <div
       className="menu"
      // id="menu-appbar"
      // anchorEl={anchorElNav}
      // anchorOrigin={{
      //  vertical: 'bottom',
      //  horizontal: 'left',
      // }}
      // keepMounted
      // transformOrigin={{
      //  vertical: 'top',
      //  horizontal: 'left',
      // }}
      // open={Boolean(anchorElNav)}
      // onClose={handleCloseNavMenu}
      // sx={{
      //  display: { xs: 'block', md: 'none' },
      // }}
      >
       {pages.map((page) => (
        <Link href={page.path} key={page.name}>

         <div
          className="menu-item"
         // key={page.name} onClick={handleCloseNavMenu}
         >
          <div
           className="menu-item-text"
          // textAlign="center"
          >{page.name}</div>
         </div>
        </Link>
       ))}
      </div>
     </div>
     <Image src='/assets/socialblog_logo.png' alt='socialblog logo' width={50} height={50} />

     <div
      className="box"
     // sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
     >
      {pages.map((page) => (
       <Link href={page.path} key={page.name}>
        <button
         className="menu-item"
        // key={page.name}
        // onClick={handleCloseNavMenu}
        // sx={{ my: 2, color: 'white', display: 'block' }}
        >
         {page.name}
        </button>
       </Link>
      ))}
     </div>

     <div
      className="box"
     // sx={{ flexGrow: 0 }}
     >
      <div
       className="tooltip"
      // title="Open settings"
      >
       {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" />
       </IconButton> */}
       <div className="rounded-full w-12 h-12 bg-borderGray">

       </div>
      </div>
      <div
       className="menu"
      // sx={{ mt: '45px' }}
      //        id="menu-appbar"
      //        anchorEl={anchorElUser}
      //        anchorOrigin={{
      //         vertical: 'top',
      //         horizontal: 'right',
      //        }}
      //        keepMounted
      //        transformOrigin={{
      //         vertical: 'top',
      //         horizontal: 'right',
      //        }}
      //        open={Boolean(anchorElUser)}
      //        onClose={handleCloseUserMenu}
      >
       {settings.map((setting) => (
        <div
         className="menu-item"
        // key={setting} onClick={handleCloseUserMenu}
        >
         <div
         // textAlign="center"
         >{setting}</div>
        </div>
       ))}
      </div>
     </div>
    </div>
   </div>
  </nav>
 );
}
export default Navbar;