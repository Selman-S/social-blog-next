import { getPostWithThunk } from "@/lib/redux/slices/postSlice/thunks"
import { reduxStore } from "../../lib/redux/store"
import Image from "next/image"
import PostCard from "../components/posts/PostCard"
import { getUserWithThunk } from "@/lib/redux/slices/userSlice/thunks"
import UserList from "../components/users/UserList"
import PostList from "../components/posts/PostList"


export default async function Home() {
  await reduxStore.dispatch(getPostWithThunk())
  await reduxStore.dispatch(getUserWithThunk())
  const postState = reduxStore.getState().post.data
  const userState = reduxStore.getState().user.data




  return (
    <>
      <div className=" flex flex-wrap gap-5 mx-auto justify-between  ">

        <UserList users={userState} />



        <div>
          <PostList posts={postState} />

          {/* {postState.data.map((post) => (

            <PostCard key={post.id} post={post} />
          ))
          } */}
        </div>
        <div>right</div>

      </div>

    </>
  )
}
