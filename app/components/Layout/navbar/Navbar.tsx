'use client'

import { GoHomeFill } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { MdOndemandVideo } from "react-icons/md";
import { BsFilePostFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { redirect } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link'
import NavbarLinks from "./NavbarLinks";
import { useEffect, useState } from "react";
import DefaultProfileIcon from '../icons/DefaulProfileIcon';
import { useSelector } from 'react-redux';
import { selectUser } from '@/lib/redux/slices/userSlice';
import useAuthCall from '@/service/useAuthCall';
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
	const { currentUser } = useSelector(selectUser)
	const [anchorElUser, setAnchorElUser] = useState<null | Boolean>(null);
	const { logOut, userObserver } = useAuthCall();

	const handleOpenUserMenu = () => {
		setAnchorElUser((e) => !Boolean(e));


	};


	const handleCloseUserMenu = () => {

		setAnchorElUser(null);
	};
	useEffect(() => {
		userObserver()
		if (!currentUser) {



		}
	}, [])

	return (
		<nav className="navbar appbar bg-white px-6">
			<div className=''>
				<div className='toolbar justify-between'>
					<div className="box">
						<Link href="/" >
							<Image src='/assets/socialblog_logo.png' alt='socialblog logo' width={50} height={50} />
						</Link>
					</div>
					<NavbarLinks pages={pages} />
					<div className=" flex items-center ">
						<div className="md:hidden cursor-pointer">
							<IoMdMenu className="text-2xl" />
						</div>
						<div className="profile-tooltip">
							{currentUser ? <div className="rounded-full w-12 h-12 bg-borderGray " onClick={handleOpenUserMenu} >
								{currentUser && (currentUser.photoURL ? <Image src={currentUser?.photoURL} alt='profile picture'
									style={{ objectFit: "cover" }} width={50} height={50} sizes="cover" className="rounded-full w-12 h-12" /> :
									<DefaultProfileIcon />

								)
								}
							</div> : (<Link href="/login" className=" p-4 hover:bg-loginbg flex items-center person  gap-6 rounded-md cursor-pointer text-[17px] font-bold " >Login</Link>)
							}

						</div>
						{currentUser &&
							<div className={`${anchorElUser ? 'open' : ''} profile-menu`}>
								{currentUser.displayName &&
									<Link href={"/profile"} className=' mt-2  p-4 hover:bg-loginbg flex items-center person  gap-6 rounded-md cursor-pointer'>
										{currentUser && currentUser.photoURL ? <Image src={currentUser?.photoURL} style={{ objectFit: "cover" }} alt='profile picture' width={30} height={30} className="rounded-full" /> :
											<DefaultProfileIcon />
										}
										{currentUser.displayName.split('&')[0]}</Link>
								}
								{settings.map((setting) => {

									if (setting.name === 'Logout') {

										return (
											<div className="profile-menu-item mt-2 block p-4 hover:bg-loginbg  rounded-md cursor-pointer"
												onClick={() => { handleCloseUserMenu(); logOut() }}
												key={setting.name}
											>
												<div className="flex gap-2"	>{setting.icon}{setting.name}</div>
											</div>
										)
									}
									return (
										<Link href={setting.path} key={setting.name}
											className="profile-menu-item mt-2 block p-4 hover:bg-loginbg  rounded-md cursor-pointer"
											onClick={handleCloseUserMenu}
										>
											<div className="flex gap-2"	>{setting.icon}{setting.name}</div>
										</Link>
									)
								}
								)}
							</div>
						}
					</div>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;