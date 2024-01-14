import React from 'react';



const NavbarLinks = ({pages}:{
 path: string
 name: string
 icon: React.ReactNode
}[]) => {
  return (
   <div className="box gap-1">
   {pages.map((page) => (
    <Link href={page.path} key={page.name} >
     <button className="nav-links relative flex items-center justify-center w-24 h-20">
      {page.icon}
      <div className="w-full hidden absolute bottom-0 h-[3px] bg-main"></div>
     </button>
    </Link>
   ))}
  </div>
  )
}

export default NavbarLinks