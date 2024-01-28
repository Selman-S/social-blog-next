"use client"
import { Owner } from '@/types/types'
import { Button, Card, CardContent, CardMedia } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import UserDeleteButton from './UserDeleteButton'


interface UserCardProps {
	user: Owner
}
const UserCard = ({ user }: UserCardProps) => {

	return (
		<Card sx={{ maxWidth: 240 }} className='rounded-lg '>

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

			<CardContent className="h-12 p-2">
				<div className='text-[14px] md:text-[17px] text-[#050505] font-semibold'>
					{user.firstName} {user.lastName}
				</div>
			</CardContent>
			<div className='p-2 md:p-4 flex flex-col gap-2'>
				<Button size="small" color="primary" className='p-2 px-4 bg-btnbg text-btnText hover:bg-btnbgHover'>

					<Link href={`/users/${user.id}`}>
						View profile
					</Link>
				</Button>
				<UserDeleteButton userId={user.id} />


			</div>

		</Card >
	)
}

export default UserCard