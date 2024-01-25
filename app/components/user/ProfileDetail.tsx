import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { photoList } from './photoList'
import { UserFull } from '@/types/types'
import { Button } from '@mui/material'
import { FaChevronDown } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

interface Props {
	user: UserFull
}
const ProfileDetail = ({ user }: Props) => {
	console.log(user);

	const nuser = {
		id: '60d0fe4f5311236168a10a1e',
		title: 'mr',
		firstName: 'Niklas',
		lastName: 'Baltzersen',
		picture: 'https://randomuser.me/api/portraits/med/women/66.jpg',
		gender: 'male',
		email: 'niklas.baltzersen@example.com',
		dateOfBirth: '1995-01-25T06:20:13.984Z',
		phone: '32509586',
		img: "https://images.unsplash.com/photo-1705750164473-c0efa38c6005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
		location: {
			street: '4651, EnsjÃ¸svingen',
			city: 'Siljan',
			state: 'Finnmark - FinnmÃ¡rku',
			country: 'Norway',
			timezone: '+11:00'
		},
		registerDate: '2021-06-21T21:02:21.645Z',
		updatedDate: '2021-06-21T21:02:21.645Z'
	}

	return (
		<div className='border md:w-[calc(100vw-360px)] w-full'>
			<div className='bg-white justify-center flex flex-col items-center'>

				<div className='  max-w-[1250px] justify-center flex '>
					<div className='relative max-h-[462px] h-[calc((100vw)*40/100)] md:h-[calc((100vw-360px)*40/100)] rounded-b-xl  overflow-hidden'>

						{/* <Image className='object-cover rounded-b-lg' src={photoList[Math.floor(Math.random() * photoList.length)]} width={1250} height={1250} alt={user.firstName} /> */}
						<Image className='object-cover rounded-b-lg' src={nuser.img} width={1250} height={1250} alt={nuser.firstName} />
					</div>
				</div>
				<div className='flex justify-between  p-2 w-full max-w-[1250px] px-4 '>

					<div className='flex gap-4'>
						<div className='z-10 '>
							<Image src={nuser.picture} width={168} height={168} alt={nuser.firstName} className='rounded-full border-4 border-white   -mt-[72px]' />
						</div>
						<div>
							<div className='text-[32px] font-bold text-black mt-6'>{nuser.firstName} {nuser.lastName}</div>
							<div className='text-linkColor mt-4 hover:underline cursor-pointer '>299 friends</div>
						</div>
					</div>
					<div className='flex items-end py-4 gap-2'>
						<Button className='bg-main rounded-md  p-3 text-white flex items-center justify-center gap-2 text-[15px] cursor-pointer  font-medium'><FaUserPlus className='text-2xl' /> Add Friend</Button>
						<Button className='bg-btnGraybg rounded-md  p-3 text-black flex items-center justify-center gap-2 text-[15px] cursor-pointer hover:bg-iconBg  font-medium'><BiSolidMessageRoundedDetail className='text-2xl' /> Message</Button>
						<Button className='bg-btnGraybg rounded-md  p-3 text-black flex items-center justify-center gap-2 text-[15px] cursor-pointer hover:bg-iconBg  font-medium'><FaChevronDown className='text-2xl' /></Button>
					</div>
				</div>
				<div>
					çizgi
				</div>
			</div>
			<div>
				navbar
			</div>
			<div>
				içerik
			</div>
		</div>
	)
}

export default ProfileDetail