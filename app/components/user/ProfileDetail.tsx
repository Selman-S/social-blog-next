import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { photoList } from './photoList'
import { UserFull } from '@/types/types'

interface Props {
	user: UserFull
}
const ProfileDetail = ({ user }: Props) => {
	 console.log(user);


	return (
		<div className='border w-[calc(100vw-360px)]'>
			<div className='bg-white'>

				<div className='mx-auto max-w-[1250px] overflow-hidden'>
					{/* <Image src={ } alt={user}> */}
				</div>
				<div>
					kullanıcı bilgileri
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