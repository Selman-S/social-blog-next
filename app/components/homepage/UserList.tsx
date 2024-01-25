'use client'
import { selectUser } from "@/lib/redux/slices/userSlice"
import usePostsCall from "@/service/usePostsCall"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"




const UserList = () => {
	const { getPostByUserId, getPosts } = usePostsCall()

	const users = useSelector(selectUser);

	const handleClick = (id: string) => {
		console.log("click");
		getPostByUserId(id)
	}

	const handleAllClick = () => {
		console.log("click");
		getPosts()
	}



	return (
		<div>
			<div className="hidden w-[310px]  p-4  lg:flex">
			</div>
			<div className=" hidden  left-0 flex-col flex-nowrap max-h-[calc(100vh-80px)]   w-[310px] bg-loginbg top-20 z-0 p-4 lg:flex shadow-none fixed" >
				<button onClick={() => handleAllClick()} className="flex p-2 items-center cursor-pointer gap-5 text-[15px] leading-5 font-semibold text-textBlack hover:bg-userLinkHover  rounded-lg ">
					<Image src="/assets/allpostpng.png" alt="allpost icon" width={40} height={40} className="rounded-full" />
					<div>All Posts</div>


				</button>
				{

					users.data.map((user, i) => {
						if (i > 8) {
							return
						}
						return (
							<button onClick={() => handleClick(user.id)} className="flex p-2 items-center cursor-pointer gap-5 text-[15px] leading-5 font-semibold text-textBlack hover:bg-userLinkHover  rounded-lg" key={user.id}>
								<Image src={`${user.picture ? user.picture : '/assets/defaultprf.png'}`} alt={user.firstName} width={40} height={40} className="rounded-full" />
								<div>{user.firstName} {user.lastName}</div>


							</button>
						)
					}
					)
				}
				<Link href="/users" className="flex p-2 items-center cursor-pointer gap-5 text-[15px] leading-5 font-semibold text-textBlack hover:bg-userLinkHover  rounded-lg" >
					<Image src="/assets/group.png" alt="allpost icon" width={40} height={40} className="rounded-full" />
					<div>More Users</div>


				</Link>

			</div>
		</div>
	)
}

export default UserList