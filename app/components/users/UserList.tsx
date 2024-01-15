'use client'

import { Owner } from "@/types/types"
import Image from "next/image"
import Link from "next/link"

type Props = {
	users: Owner[]

}

const UserList = ({ users }: Props) => {



	return (
		<div className=" flex flex-wrap flex-col w-[360px]  p-4 ">
			{
				users.map((user) => (
					<Link href={`/users/${user.id}`} className="flex p-2 items-center cursor-pointer gap-5 text-[15px] leading-5 font-semibold text-textBlack hover:bg-userLinkHover  rounded-lg" key={user.id}>
						<Image src={user.picture} alt={user.firstName} width={40} height={40} className="rounded-full" />
						<div>{user.firstName} {user.lastName}</div>


					</Link>
				))
			}


		</div>
	)
}

export default UserList