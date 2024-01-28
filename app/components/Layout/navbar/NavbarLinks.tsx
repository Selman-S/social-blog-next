'use client'
import { Tooltip } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavbarLinksProps {
  pages: {
    name: string;
    path: string;
    icon: React.ReactElement;
  }[]
}



const NavbarLinks = ({ pages }: NavbarLinksProps) => {
  const pathname = usePathname()


  return (
    <div className="gap-1 hidden md:flex items-center">
      {pages?.map((page) => {

        return (
          <Tooltip key={page.name} title={page.name}>

            <Link href={page.path} className={pathname == page.path ? "active w-24" : "w-24"} >
              <button className="nav-links relative flex items-center justify-center w-24 h-20">
                {page.icon}
                <div className="w-full hidden absolute bottom-0 h-[3px] bg-main"></div>
              </button>
            </Link>
          </Tooltip>
        )
      })}
    </div>
  )
}

export default NavbarLinks