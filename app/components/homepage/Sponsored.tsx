import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sponsored = () => {
	return (
		<div>
			<div className='hidden md:block w-[260px]'></div>
			<div className="hidden md:block w-[260px] right-0 top-20  text-linkColor text-[17px] mt-[28px]  font-semibold fixed ">
				<Typography variant="h6" className="mb-4">
					Sponsored
				</Typography>
				<Box sx={{ display: "flex", gap: "1rem", flexDirection: "column", }} className="border-b pb-4">

					<Box sx={{ display: "flex", alignItems: 'center', gap: "1rem" }}>
						<Image src="/assets/sponsor1.jpg" className='rounded-lg' alt="sponsor image" width="100" height="100">

						</Image>
						<Box>

							<Typography variant="h6" className="mb-1 text-[15px] text-[#050505]">
								5Scape Presale is Live!
							</Typography>
							<Link href="5thscape.com" target="_blak" className="text-[13px]">5thscape.com</Link>
						</Box>
					</Box>
					<Box sx={{ display: "flex", alignItems: 'center', gap: "1rem" }}>
						<Image src="/assets/sponsor2.jpg" className='rounded-lg' alt="sponsor image" width="100" height="100">

						</Image>
						<Box>

							<Typography variant="h6" className="mb-1 text-[15px] text-[#050505]">
								Hotel deals in Vienna with up to 37% discount
							</Typography>
							<Link href="locktrip.com" target="_blak" className="text-[13px]">locktrip.com</Link>
						</Box>
					</Box>
				</Box>
			</div>
		</div>
	)
}

export default Sponsored