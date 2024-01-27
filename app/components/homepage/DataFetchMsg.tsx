import { Alert, Card, Skeleton, Stack } from "@mui/material"
import React from "react"

export const ErrorMsg = () => {
	return (
		<Alert severity="error" sx={{ my: 3 }}>
			Veriler çekilemedi.
		</Alert>
	)
}

export const NoDataMsg = () => {
	return (
		<Alert severity="warning" sx={{ my: 3 }}>
			Gösterilecek bir veri bulunamadı.
		</Alert>
	)
}

export const CardSkeleton = () => {
	return (
		<Stack className="w-full bg-white  rounded-lg p-4">
			<Stack className="flex gap-4 flex-row">
				<Skeleton variant="circular" width={40} height={40}></Skeleton>
				<Stack className="flex gap-1  flex-col">
					<Skeleton variant="rectangular" className="w-28"></Skeleton>
					<Skeleton variant="rectangular" className="w-20"></Skeleton>


				</Stack>
			</Stack>
			<Skeleton variant="rectangular" className="w-32 mt-2"></Skeleton>
			<Skeleton variant="rectangular" className="w-32 mt-2"></Skeleton>
			<Skeleton variant="rectangular" className="w-full mt-4 h-60"></Skeleton>
			<Skeleton variant="rectangular" className="w-20 mt-2"></Skeleton>
			<Stack className="flex justify-evenly flex-row">
				<Skeleton variant="rectangular" className="w-16 mt-5"></Skeleton>
				<Skeleton variant="rectangular" className="w-16 mt-5"></Skeleton>
				<Skeleton variant="rectangular" className="w-16 mt-5"></Skeleton>

			</Stack>
		</Stack>
	)
}

const TableSkeleton = () => {
	return (
		<Stack spacing={1} sx={{ mt: 3 }}>
			<Skeleton variant="rectangular" width="100%" height={80} />
			<Skeleton variant="rectangular" width="100%" height={40} />
			<Skeleton variant="rectangular" width="100%" height={40} />
			<Skeleton variant="rectangular" width="100%" height={40} />
		</Stack>
	)
}

export default TableSkeleton