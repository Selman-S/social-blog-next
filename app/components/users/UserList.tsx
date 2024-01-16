'use client'

import { selectUser } from "@/lib/redux/slices/userSlice"
import useUsersCall from "@/service/useUsersCall"
import { Owner } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { useSelector } from "react-redux"




const UserList = () => {

	const { getUsers } = useUsersCall()
	const users = useSelector(selectUser);


	useEffect(() => {
		getUsers()
		console.log(users)
	}, [])

	return (
		<div className=" flex flex-wrap flex-col w-[360px]  p-4 ">
			{/* {
				users.map((user) => (
					<Link href={`/users/${user.id}`} className="flex p-2 items-center cursor-pointer gap-5 text-[15px] leading-5 font-semibold text-textBlack hover:bg-userLinkHover  rounded-lg" key={user.id}>
						<Image src={user.picture} alt={user.firstName} width={40} height={40} className="rounded-full" />
						<div>{user.firstName} {user.lastName}</div>


					</Link>
				))
			} */}


		</div>
	)
}

export default UserList