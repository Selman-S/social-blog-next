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

	const { getUsers } = useUsersCall()
	const { getPostByUserId } = usePostsCall()
	const users = useSelector(selectUser);
	const dispatch = useDispatch()


	useEffect(() => {
		getUsers()
		console.log("users", users)
	}, [])

	const handleClick = (id: string) => {
		console.log("click");
		getPostByUserId(id)
	}

	if (users.error) {
		return <div>Error</div>

	}
	if (users.loading) {
		return <div>Loading...</div>

	}
	if (users.data.length === 0) {
		return <div>No data</div>

	}

	return (
		<div className=" flex flex-wrap flex-col w-[360px]  p-4 ">
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