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
		...user,
		img: photoList[Math.floor(Math.random() * photoList.length)]
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