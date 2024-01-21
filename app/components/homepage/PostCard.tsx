'use client'
import * as React from 'react';
import { Post } from '@/types/types';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { convertDateFormat } from '@/utils/convertDate';
import { IoClose } from "react-icons/io5";
import usePostsCall from '@/service/usePostsCall';
import { Box, Popover, Tooltip } from '@mui/material';

import { PhotoProvider, PhotoView } from 'react-photo-view';


export default function PostCard({ post }: { post: Post }) {

	const { deletePost } = usePostsCall()

	const handleRemove = (id: string) => {
		console.log(id);
		deletePost(id)
	}
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	return (
		<PhotoProvider>
			<Card className='card rounded-xl max-w-[680px]'>
				<CardHeader
					avatar={
						<Avatar aria-label="recipe" className='cursor-pointer' aria-owns={open ? 'mouse-over-popover' : undefined}
							aria-haspopup="true"
							onMouseEnter={handlePopoverOpen}
							onMouseLeave={handlePopoverClose}>
							<Image src={post.owner?.picture} className="rounded" alt={post.owner?.firstName} width={40} height={40} />
						</Avatar>
					}
					action={
						<Tooltip title="Hidden Post" placement="top" >
							<IconButton aria-label="settings">
								<IoClose className="w-6 h-6" onClick={() => handleRemove(post.id)} />
								{/* <IoClose className="w-6 h-6" /> */}
							</IconButton>
						</Tooltip>
					}
					title={post.owner?.firstName + " " + post.owner?.lastName}
					subheader={convertDateFormat(post.publishDate)}
				/>
				<Popover
					id="mouse-over-popover"
					sx={{
						pointerEvents: 'none',
					}}
					open={open}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					onClose={handlePopoverClose}
					disableRestoreFocus
				>
					<Card className="rounded-lg p-4">


						<Box className="rounded-full object-cover object-center w-30 h-30 overflow-hidden">
							<Image src={post.owner?.picture} className="rounded-full object-cover object-center w-30 h-30" alt={post.owner?.firstName} width={120} height={120} />
						</Box>
						<Box>
							<Typography className="text-xl font-semibold">

								{post.owner?.title}
							</Typography>
							<Typography className="text-xl font-semibold">

								{post.owner?.firstName} {post.owner?.lastName}
							</Typography>

						</Box>


					</Card>
				</Popover>
				<div className='flex gap-2 px-4'>
					{post.tags?.map((tag, index) => (

						<div key={index} className="text-xs text-[#0064d1] text-decoration-underline ">#{tag}</div>

					))}
				</div>
				<CardContent className='p-2 px-4 '>
					<Typography variant="body2" className='text-black' color="text.secondary">
						{post.text}
					</Typography>
				</CardContent>
				<PhotoView src={post.image}>

					<Image
						src={post.image}
						className=""
						width={680}
						height={590}
						alt={post.text}
					/>
				</PhotoView>
				<div className="flex p-2 px-4">
					<div className="flex relative w-14 h-5">

						<div className="absolute top-0 left-0 z-20 border w-5 h-5 border-white rounded-[20px]">
							<Image
								src="/assets/favi.png"
								width={20}
								height={20}
								alt="like icon"
							/>

						</div>
						<div className="absolute z-10 left-[18px] top-0">
							<Image
								src="/assets/likei.png"
								width={20}
								height={20}
								alt="fav icon"
							/>
						</div>


					</div>
					<div className="flex items-center justify-center text-[15px] leading-[21px]  h-5 -ml-2 -mr-2 bg-white text-linkColor">
						<p className="text-xs text-gray-500">{post.likes}</p>

					</div>
				</div>


				<div className="p-2 px-4 ">
					<div className=" w-full border border-t-0 border-borderGray">


					</div>
				</div>

				<div className='p-2 px-4 pb-3 flex justify-around'>
					<div>like</div>
					<div>like</div>
					<div>like</div>
				</div>

			</Card>
		</PhotoProvider>
	);
}



// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (

//   );
// }