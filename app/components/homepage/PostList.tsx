'use client'
import { postSlice, selectPost } from "@/lib/redux"
import usePostsCall from "@/service/usePostsCall"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PostCard from "./PostCard"
import { Post, PostCreate } from "@/types/types"
import CreatePostHomePage from "./CreatePost"
import { CardSkeleton, ErrorMsg, NoDataMsg } from './DataFetchMsg'
import CreatePostModal from "./CreatePostModal"
import { Grid } from "@mui/material"
import CreatePost from './../posts/CreatePost';
import { selectUser } from "@/lib/redux/slices/userSlice"



const PostList = () => {
 const { getPosts, getTags } = usePostsCall()
 const posts = useSelector(selectPost);
 const { currentUser } = useSelector(selectUser);
 const [info, setInfo] = useState<PostCreate>({ text: "", image: "", likes: 0, tags: [], owner: "" })
 const [open, setOpen] = useState(false)
 const handleOpen = () => setOpen(true)
 const handleClose = () => {
  setOpen(false)
  setInfo({ text: "", image: "", likes: 0, tags: [], owner: "" })
 }


 useEffect(() => {
  getPosts()
  console.log(currentUser);

  console.log("posts", posts)
 }, [])


 return (
  <div className="max-w-[590px] mt-4 flex mx-8 flex-col gap-4">
   <CreatePostHomePage handleOpen={handleOpen} />
   <CreatePostModal
    open={open}
    handleClose={handleClose}
    info={info}
    setInfo={setInfo}
   />
   {posts.error && <ErrorMsg />}
   {posts.data.map((post) => (
    <PostCard post={post} key={post.id} />
   ))}





   {posts.loading && (
    <CardSkeleton />


   )}

   {!posts.loading && !posts?.data.length && <NoDataMsg />}

   {!posts.loading && posts?.data?.length > 0 && (
    <Grid container justifyContent={"center"} gap={2} mt={4}>
     {posts?.data?.map((post) => (
      <PostCard post={post} key={post.id} />

     ))}
    </Grid>
   )}

  </div >
 )
}

export default PostList