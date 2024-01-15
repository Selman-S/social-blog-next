'use client'

import { Owner } from "@/types/types"
import Image from "next/image"

type Props = {
	userState: Owner[]
}

const UserList = ({ userState }: Props) => {


	return (
		<div className=" flex flex-wrap flex-col w-[360px]  p-4 ">
			{
				userState.map((user) => (
					<div className="flex p-2 items-center cursor-pointer gap-5 text-[15px] leading-5 font-semibold text-textBlack hover:bg-userLinkHover  rounded-lg" key={user.id}>
						<Image src={user.picture} alt={user.firstName} width={40} height={40} className="rounded-full" />
						<div>{user.firstName} {user.lastName}</div>


					</div>
				))
			}


		</div>
	)
}

export default UserList