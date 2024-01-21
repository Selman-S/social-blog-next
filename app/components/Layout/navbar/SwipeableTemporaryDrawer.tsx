import { GoHomeFill } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { MdOndemandVideo } from "react-icons/md";
import { BsFilePostFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'

export default function SwipeableTemporaryDrawer() {
	const [state, setState] = React.useState(false);
	const paths = [
		{ name: 'Home', path: '/', icon: <GoHomeFill /> },
		{ name: 'Users', path: '/users', icon: <TbUsers /> },
		{ name: 'Posts', path: '/posts', icon: <MdOndemandVideo /> },
		{ name: 'My Posts', path: '/mypost', icon: <BsFilePostFill /> },


	]

	const toggleDrawer =
		(open: boolean) =>
			(event: React.KeyboardEvent | React.MouseEvent) => {
				if (
					event &&
					event.type === 'keydown' &&
					((event as React.KeyboardEvent).key === 'Tab' ||
						(event as React.KeyboardEvent).key === 'Shift')
				) {
					return;
				}

				setState(open);
			};

	const list = () => (
		<Box
			sx={{ width: "auto" }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{paths.map((path) => (
					<Link href={path.path} key={path.name} >
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{path.icon}
								</ListItemIcon>
								<ListItemText primary={path.name} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>


		</Box>
	);

	return (
		<div>

			<React.Fragment>
				<div className="md:hidden cursor-pointer" >

					<IoMdMenu className="text-2xl" onClick={toggleDrawer(true)} />
				</div>

				<SwipeableDrawer
					anchor={'top'}
					open={state}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
					sx={{ width: 1 }}
				>
					{list()}
				</SwipeableDrawer>
			</React.Fragment>

		</div>
	);
}