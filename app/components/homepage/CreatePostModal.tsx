import usePostsCall from '@/service/usePostsCall'
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, OutlinedInput, Select, Typography } from '@mui/material'
import React from 'react'
import { tags } from './tags'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from "yup";
import { Controller, useForm } from 'react-hook-form'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectUser } from '@/lib/redux/slices/userSlice'
import { redirect } from 'next/navigation'
import { coloredToast } from '@/lib/sweetalertToast/config'



const postCreateSchema = yup.object({
	text: yup.string().required("Post text is required"),
	image: yup.string().url("Please enter a valid url"),
	tags: yup.array().of(yup.string().required("Please select at least one tag")),

});

type FormData = yup.InferType<typeof postCreateSchema>;

const CreatePostModal = ({ open, handleClose }: { open: boolean, handleClose: () => void }) => {


	const { currentUser } = useSelector(selectUser)
	const { createPost } = usePostsCall()
	const { register, handleSubmit, watch, control, formState: { errors }, reset, setValue } = useForm<FormData>({
		resolver: yupResolver(postCreateSchema)
	});

	const onSubmit = (data: FormData, event: React.FormEvent) => {

		console.log('sdsa');
		event.preventDefault();
		if (!currentUser?.uid) {
			coloredToast('error', 'Please login to create post')
			redirect('/login')
		}
		const owner = currentUser?.uid || "60d0fe4f5311236168a109ca"
		const res = createPost({ text: data.text || "", tags: data.tags || [], image: data.image || '', likes: 0, owner })
		console.log(res);
		modalClose()

	}

	const modalClose = () => {
		setValue("text", "")
		setValue("image", "")
		setValue("tags", [])
		handleClose()
	}

	return (
		<Modal
			open={open}
			onClose={modalClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"



		>
			<Box className=' absolute -translate-x-2/4 -translate-y-2/4 w-[90%]  md:w-[500px] bg-[#fff] shadow-[0px_0px_24px_rgba(0,0,0,0.2)] rounded-lg left-2/4 top-2/4' >
				<div onClick={modalClose} className="absolute w-10 h-10 flex items-center justify-center top-4 right-4 cursor-pointer hover:bg-[#d5d5d5] rounded-full bg-userLinkHover">
					<Image src="/assets/Vector.png" width="20" height="20" alt="cross icon" />
				</div>
				<Typography id="modal-modal-title" className="text-center p-5 mb-4 border-b-[1px] border-b-[#bbb] text-[20px] font-bold" variant="h6" component="h2">
					Create Post
				</Typography>

				<Box
					sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 4 }}
					component={"form"}
					onSubmit={handleSubmit((data, event) => onSubmit(data, event as React.FormEvent))}
				>


					<input
						className='p-3 text-xl border rounded-lg  border-borderGray w-full'
						required
						id="text"
						placeholder="text"
						{...register("text")}

						autoFocus />


					<input
						className='p-3 text-xl  border rounded-lg  border-borderGray w-full'
						required
						id="image"
						placeholder="image from unsplash.com"
						{...register("image")}

					/>

					<FormControl fullWidth>
						<InputLabel id="tagsa" className=' text-xl  mt-2 rounded-lg  border-borderGray w-full'>Tags</InputLabel>
						<Controller
							name="tags"
							control={control}
							defaultValue={[]}
							render={({ field }) => (
								<Select {...field} multiple className="mt-4" input={<OutlinedInput label="Multiple Select" />}>
									{tags.map((item) => (
										<MenuItem key={item._id} value={item.name} className=''>
											{item.name}
										</MenuItem>

									))}

								</Select>
							)}
						/>
					</FormControl>




					<Button type="submit" className="p-3 text-[15px] text-white font-semibold rounded-md bg-activeLink w-full" color="success" >
						Post
					</Button>
				</Box>
			</Box>
		</Modal>
	)
}

export default CreatePostModal