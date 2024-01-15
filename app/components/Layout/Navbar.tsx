'use client'
import * as React from 'react';
import { IoSearch } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { MdOndemandVideo } from "react-icons/md";
import { BsFilePostFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";

import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link'
import NavbarLinks from "../login/NavbarLinks";
import path from "path";
import { useState } from "react";
const pages = [
	{ name: 'Home', path: '/', icon: <GoHomeFill /> },
	{ name: 'Users', path: '/users', icon: <TbUsers /> },
	{ name: 'Posts', path: '/posts', icon: <MdOndemandVideo /> },
	{ name: 'My Posts', path: '/mypost', icon: <BsFilePostFill /> },

];
const settings = [
	{
		name: 'Profile',
		icon: <CgProfile />,
		path: '/profile',
	},
	{
		name: 'Account',
		icon: <IoIosSettings />,
		path: '/account',
	},
	{
		name: 'Logout',
		icon: <IoLogOutOutline />,
		path: '/logout',
	},
];

function Navbar() {
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {

		setAnchorElUser(null);
	};

	return (
		<nav className="navbar appbar bg-white px-6">
			<div className='container mx-auto'>
				<div className='toolbar justify-between'>
					<div className="box">
						<Link href="/" >
							<Image src='/assets/socialblog_logo.png' alt='socialblog logo' width={50} height={50} />
						</Link>
					</div>
					<NavbarLinks pages={pages} />

					<div className="box ">
						<div className="profile-tooltip">
							{/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" />
							</IconButton> */}
							<div className="rounded-full w-12 h-12 bg-borderGray " onClick={handleOpenUserMenu}>
								<svg
									aria-label="Your profile"
									className="profile-icon"
									data-visualcompletion="ignore-dynamic"
									role="img"
									style={{ height: 50, width: 50 }}
								>
									<mask id=":Rqir3aj9emhpapd5aq:">
										<circle cx={25} cy={25} fill="#FFFFFF" r={25} />
									</mask>
									<g mask="url(#:Rqir3aj9emhpapd5aq:)">
										<image
											style={{ height: 50, width: 50 }}
											x={0}
											y={0}
											height="100%"
											preserveAspectRatio="xMidYMid slice"
											width="100%"
											xlinkHref="https://scontent.fesb4-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=nZwDo3Nj-b8AX8tn506&_nc_ht=scontent.fesb4-2.fna&oh=00_AfCmjBMy_8rQ3bBtPqtILq1NWCTPy_INeXOqUKEJYmdwDg&oe=65CC63F8"
										/>
										<circle
											className="xbh8q5q x1pwv2dq xvlca1e"
											cx={25}
											cy={25}
											r={25}
											strokeOpacity="0.1"
											stroke="#000000"
											fill="none"
											strokeWidth="2px"
										/>
									</g>
								</svg>
							</div>
						</div>
						<div
							className="profile-menu"
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
								<Link href={setting.path} key={setting.name}
									className="profile-menu-item mt-2 block p-4 hover:bg-loginbg  rounded-md cursor-pointer"
									onClick={handleCloseUserMenu}
								>
									<div className="flex gap-2"	>{setting.icon}{setting.name}</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;