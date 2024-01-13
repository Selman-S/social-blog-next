import { getPostWithThunk } from "@/lib/redux/slices/postSlice/thunks"
import { reduxStore } from "../lib/redux/store"
import Image from "next/image"
import PostCard from "./components/posts/PostCard"


export default async function Home() {
  await reduxStore.dispatch(getPostWithThunk())
  const postState = reduxStore.getState().post



  return (
    <>
      <div className=" container mt-5 flex flex-wrap gap-5 mx-auto justify-center  ">
        {postState.data.map((post) => (

          <PostCard key={post.id} post={post} />
        ))
        }
      </div>

    </>
  )
}
