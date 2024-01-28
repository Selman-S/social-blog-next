"use client"
import { postSlice, selectPost } from "@/lib/redux"
import { Post } from "@/types/types"
import { Box, Button, Card, Typography } from "@mui/material"
import Image from "next/image"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
interface Props {
	setFilteredPosts: (posts: Post[]) => void;
}
const SerachPost = ({ setFilteredPosts }: Props) => {
	const posts = useSelector(selectPost)
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const filteredPosts = posts.data.filter(post => post.text.toLowerCase().includes(e.target.value.toLowerCase()) || post.tags.includes(e.target.value.toLowerCase()))
		setFilteredPosts(filteredPosts)

	}

	return (
		<>
			<Card className='p-4 rounded-lg'>
				<div className="top-search flex gap-4 items-center">

					<Image className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center " src={'/assets/defaultprf.png'} alt='default profile' width={40} height={40} />


					<input onChange={handleSearch} type="text" placeholder="Search" className="search-inpu p-[10px] rounded-[30px] outline-none border-none bg-loginbg w-full" />

				</div>
				<div className="top-devide boerder border-b-2 border-b-borderGray mt-4 "></div>
				<div className="top-bottom grid grid-cols-3 mt-2">
					<Button className="p-3 rounded-lg flex gap-2 items-center hover:bg-[#f2f2f2]">
						<Image src="/assets/camera.png" alt="link icon" width={20} height={20}></Image>
						<span className="text-linkColor font-medium text-[15pxs]">	Live video</span>
					</Button>
					<Button className="p-3 rounded-lg flex gap-2 items-center hover:bg-[#f2f2f2]">
						<Image src="/assets/post.png" alt="link icon" width={20} height={20}></Image>
						<span className="text-linkColor font-medium text-[15pxs]">Photo/video</span>
					</Button>
					<Button className="p-3 rounded-lg flex gap-2 items-center hover:bg-[#f2f2f2]">
						<Image src="/assets/snile.png" alt="link icon" width={20} height={20}></Image>
						<span className="text-linkColor font-medium text-[15pxs]">	Feeling/activity</span>
					</Button>

				</div>
			</Card>

		</>
	)
}

export default SerachPost