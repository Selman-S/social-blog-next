'use client'

import { selectUser } from "@/lib/redux/slices/userSlice"
import usePostsCall from "@/service/usePostsCall"
import Image from "next/image"
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
		<div className=" hidden flex-wrap flex-col min-w-[260px] max-w-[340px] p-4 lg:flex">
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