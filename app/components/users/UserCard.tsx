"use client"
import { selectUser, userSlice } from '@/lib/redux/slices/userSlice'
import { Owner } from '@/types/types'
import { Button, Card, CardContent, CardMedia } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'


interface UserCardProps {
	user: Owner
}
const UserCard = ({ user }: UserCardProps) => {
	const dispatch = useDispatch()
	const users = useSelector(selectUser)
	console.log(users);



	return (
		<Card sx={{ maxWidth: 240 }} className='rounded-lg'>

			<Link href={`/users/${user.id}`} className='cursor-pointer'>
				{user.picture ?

					<Image
						src={user?.picture}
						width={240}
						height={240}
						alt={user.firstName}
					/>
					:
					<Image
						src='/assets/defaultprf.png'
						width={240}
						height={240}
						alt={user.firstName}
					/>
				}
			</Link>

			<CardContent>
				<div className='text-[17px] text-[#050505] font-semibold'>
					{user.firstName} {user.lastName}
				</div>
			</CardContent>
			<div className='p-4 flex flex-col gap-2'>
				<Button size="small" color="primary" className='p-2 px-4 bg-btnbg text-btnText hover:bg-btnbgHover'>

					<Link href={`/users/${user.id}`}>
						View profile
					</Link>
				</Button>
				<Button onClick={() => dispatch(userSlice.actions.removeUser(user.id))} size="small" color="secondary" className='p-2 px-4 bg-btnGraybg hover:bg-[#D8DADF] text-textBlack'>
					Delete
				</Button>


			</div>

		</Card >
	)
}

export default UserCard