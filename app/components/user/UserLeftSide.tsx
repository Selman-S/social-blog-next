"use client"
import { selectUser, userSlice } from "@/lib/redux/slices/userSlice";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";


const UserLeftSide = () => {
	const users = useSelector(selectUser).data
	const dispatch = useDispatch()
	console.log(users)




	const handleAddFriend = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

	};

	const handleRemoveFriend = (e: React.MouseEvent, userId: string) => {
		e.preventDefault();
		e.stopPropagation(); // Link bileşenine olayın yayılmasını önler
		dispatch(userSlice.actions.removeUser(userId));
	};

	return (
		<>
			<div className="hidden md:block w-[360px] fixed top-20 left-0 min-h-[calc(100vh-80px)] bg-white">
				<div className='p-[1px]'>

					<div className="side-header fixed p-4">

						<div className="flex items-center gap-4 ">
							<div className="text-xl text-[#696f77] cursor-pointer rounded-full p-2 hover:bg-loginbg">
								<IoMdArrowBack />
							</div>
							<div>
								<div className="text-linkColor text-sm">
									Friends
								</div>
								<div className="text-black text-2xl font-bold">
									Suggestions
								</div>
							</div>

						</div>
					</div>
					<div className="mt-20  overflow-y-auto user-l  h-[calc(100vh-160px)]">
						<div className=" font-semibold px-4 text-[17px] mb-2 text-black">
							People you may know
						</div>
						{users.map((user) => (
							<Link href={`/users/${user.id}`} className="flex py-3 p-2 transition-all cursor-pointer items-center  hover:bg-[#f2f2f2] rounded-md gap-4 " key={user.id}>
								<div>
									<Image src={`${user.picture ? user.picture : "/assets/defaultprf.png"}`} alt={user.firstName} width={60} height={60} className="rounded-full" />
								</div>
								<div>
									<div className="font-semibold text-black text-[15px]">
										{user.firstName} {user.lastName}
									</div>
									<div className="flex gap-2 mt-2">
										<Button onClick={(e) => handleAddFriend(e)} className="bg-main p-2 px-4 font-semibold  flex items-center justify-center text-[15px] text-white w-[120px] h-9 rounded-lg">
											Add Friend
										</Button>
										<Button onClick={(e) => handleRemoveFriend(e, user.id)} className="bg-btnGraybg p-2 px-4 font-semibold  flex items-center justify-center  text-[15px] text-black hover:bg-iconBg w-[120px] h-9 rounded-lg">
											Remove

										</Button>
									</div>
								</div>
							</Link>
						))}



					</div>

				</div>
			</div>
			<div className="hidden md:block  w-[360px]  top-20 left-0 min-h-[calc(100vh-80px)] "></div>
		</>
	)
}

export default UserLeftSide