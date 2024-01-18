import usePostsCall from '@/service/usePostsCall'
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'
import React from 'react'
import { tags } from './tags'



const CreatePostModal = ({ open, handleClose, info, setInfo }: { open: boolean, handleClose: () => void, info: any, setInfo: (info: any) => void }) => {

 const { createPost } = usePostsCall()

 const handleChange = (e: { preventDefault: () => void; target: { name: any; value: any } }) => {
  e.preventDefault()
  setInfo({ ...info, [e.target.name]: e.target.value })
 }
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  if (info._id) {
   createPost(info)
  } else {

  }
  handleClose()
 }





 const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
 }
 return (
  <Modal
   open={open}
   onClose={handleClose}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
  >
   <Box sx={modalStyle}>
    <Box
     sx={{ display: "flex", flexDirection: "column", gap: 2 }}
     component={"form"}
     onSubmit={handleSubmit}
    >
     <TextField
      label="Post Text"
      name="text"
      id="text"
      type="text"
      variant="outlined"
      value={info.text}
      onChange={handleChange}
      required
     />

     <TextField
      label="Image Url"
      name="image"
      id="image"
      type="url"
      variant="outlined"
      value={info.image}
      onChange={handleChange}
     />
     <TextField
      label="Image Url"
      name="image"
      id="image"
      type="url"
      variant="outlined"
      value={info.image}
      onChange={handleChange}
     />
     <FormControl fullWidth>
      <InputLabel id="tags">Tags</InputLabel>
      <Select
       labelId="tagId"
       id="tagId"
       name="tagId"
       value={info.categoryId}
       label="Tags"
       onChange={handleChange}
      >
       {tags.map((item) => (
        <MenuItem key={item._id} value={item._id}>
         {item.name}
        </MenuItem>
       ))}
      </Select>
     </FormControl>

     <Button type="submit" variant="contained" size="large">
      Save Post
     </Button>
    </Box>
   </Box>
  </Modal>
 )
}

export default CreatePostModal