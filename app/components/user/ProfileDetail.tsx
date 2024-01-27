import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { photoList } from './photoList'
import { UserFull } from '@/types/types'
import { Button } from '@mui/material'
import { FaChevronDown } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import StickyProfileBar from './profiledetail/StickyProfileBar'
import { writeLocation } from '@/utils/writeLocation'
import UserDetailImage from './profiledetail/UserDetailImage'
import UserDetailUserInfo from './profiledetail/UserDetailUserInfo'
import UserDetailPosts from './profiledetail/UserDetailPosts'

interface Props {
	user: UserFull
}
const ProfileDetail = ({ user }: Props) => {

	console.log(user);

	const nuser = {
		id: '60d0fe4f5311236168a10a1e',
		firstName: 'Niklas',
		title: 'mr',
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
		<div className=' md:w-[calc(100vw-360px)] w-full profile-detail'>
			<UserDetailImage nuser={nuser} />
			<UserDetailUserInfo />

			<StickyProfileBar nuser={nuser} />

			<UserDetailPosts nuser={nuser} />
		</div >
	)
}

export default ProfileDetail