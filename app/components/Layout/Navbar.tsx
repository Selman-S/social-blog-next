
import { IoSearch } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { MdOndemandVideo } from "react-icons/md";
import { BsFilePostFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link'
const pages = [
	{ name: 'Home', path: '/', icon: <GoHomeFill /> },
	{ name: 'Users', path: '/users', icon: <TbUsers /> },
	{ name: 'Posts', path: '/posts', icon: <MdOndemandVideo /> },
	{ name: 'My Posts', path: '/mypost', icon: <BsFilePostFill /> },

];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {


	return (
		<nav className="navbar appbar bg-white">
			<div className='container mx-auto'>
				<div className='toolbar justify-between'>
					<div className="box">
						<Link href="/" >
							<Image src='/assets/socialblog_logo.png' alt='socialblog logo' width={50} height={50} />
						</Link>
					</div>
					<NavbarLinks pages={pages} />

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