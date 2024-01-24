import { Owner } from "@/types/types"
import UserCard from "./UserCard"
import { Box, Typography } from "@mui/material"
import { reduxStore } from "@/lib/redux"
import { getUsersWithThunk } from "@/lib/redux/slices/userSlice/thunks"


const UsersCards = async () => {
	const users = reduxStore.getState().user.data
	return (
		<>
			<div className="flex justify-between items-center w-[calc(100vw-400px)]">

				<h4 className="p-4 text-[20px] text-[#050505] font-bold" >
					People you may know
				</h4>
				<div className="text-activeLink text-[20px] cursor-pointer ">See all</div>
			</div>
			<div className="flex  gap-4 flex-wrap mt-4 ">

				{users.map((user) => (
					<UserCard user={user} key={user.id} />
				))}
			</div>
		</>
	)
}

export default UsersCards