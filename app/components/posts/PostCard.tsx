'use client'
import * as React from 'react';
import { Post } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { convertDateFormat } from '@/utils/convertDate';
import { IoClose } from "react-icons/io5";
import { postSlice, reduxStore, selectPost } from '@/lib/redux';
import { useDispatch, useSelector } from 'react-redux';


export default function PostCard({ post }: { post: Post }) {

	// const dispatch = useDispatch()

	// const posts = useSelector(selectPost);
	// console.log(posts);

	// const handleRemove = (id: string) => {
	//  dispatch(postSlice.actions.removePost(id))
	// }


	return (

		<Card sx={{ Width: 500 }} className='card rounded-xl'>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe">
						<Image src={post.owner?.picture} className="rounded" alt={post.owner?.firstName} width={40} height={40} />
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						{/* <IoClose className="w-6 h-6" onClick={() => handleRemove(post.id)} /> */}
						<IoClose className="w-6 h-6" />
					</IconButton>
				}
				title={post.owner?.firstName + " " + post.owner?.lastName}
				subheader={convertDateFormat(post.publishDate)}
			/>
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
			<Image
				src={post.image}
				className="max-h-[400px] object-fit-cover"
				width={500}
				height={400}
				alt={post.text}
			/>
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
				<div className="flex items-center justify-center text-[15px] leading-[21px]  h-5 -ml-2 -mr-2 bg-white text-[#65676b]">
					<p className="text-xs text-gray-500">{post.likes}</p>

				</div>
			</div>




			<CardActions disableSpacing>

				<Link href={`/posts/${post.id}`}>
					Düzenle
				</Link>
				{/* <button onClick={() => handleRemove(post.id)} > */}
				<button  >
					Sil
				</button>
			</CardActions>

		</Card>

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