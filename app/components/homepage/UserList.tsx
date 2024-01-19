'use client'

import { postSlice } from "@/lib/redux"
import { selectUser } from "@/lib/redux/slices/userSlice"
import usePostsCall from "@/service/usePostsCall"
import useUsersCall from "@/service/useUsersCall"
import { Owner } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"




const UserList = () => {

	const { getPostByUserId, getPosts } = usePostsCall()
	const users = useSelector(selectUser);
	const dispatch = useDispatch()


	useEffect(() => {

	}, [])

	const handleClick = (id: string) => {
		console.log("click");
		getPostByUserId(id)
	}

	const handleAllClick = () => {
		console.log("click");
		getPosts()
	}


	return (
		<div className=" flex flex-wrap flex-col w-[280px]  p-4 ">
			<button onClick={() => handleAllClick()} className="flex p-2 items-center cursor-pointer gap-5 text-[15px] leading-5 font-semibold text-textBlack hover:bg-userLinkHover  rounded-lg" >
				<Image src="/assets/allpostpng.png" alt="allpost icon" width={40} height={40} className="rounded-full" />
				<div>All Posts</div>


			</button>
			{
				users.data.map((user) => (
					<button onClick={() => handleClick(user.id)} className="flex p-2 items-center cursor-pointer gap-5 text-[15px] leading-5 font-semibold text-textBlack hover:bg-userLinkHover  rounded-lg" key={user.id}>
						<Image src={user.picture} alt={user.firstName} width={40} height={40} className="rounded-full" />
						<div>{user.firstName} {user.lastName}</div>


					</button>
				))
			}


		</div>
	)
}

export default UserList