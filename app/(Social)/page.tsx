import { getPostWithThunk } from "@/lib/redux/slices/postSlice/thunks"
import { reduxStore } from "../../lib/redux/store"
import Image from "next/image"
import PostCard from "../components/posts/PostCard"
import { getUserWithThunk } from "@/lib/redux/slices/userSlice/thunks"


export default async function Home() {
  await reduxStore.dispatch(getPostWithThunk())
  await reduxStore.dispatch(getUserWithThunk())
  const postState = reduxStore.getState().post
  const userState = reduxStore.getState().user




  return (
    <>
      <div className=" container mt-5 flex flex-wrap gap-5 mx-auto justify-center   ">
        <div>

          {postState.data.map((post) => (

            <PostCard key={post.id} post={post} />
          ))
          }
        </div>
        <div>
          {
            userState.data.map((user) => (
              <div className="flex flex-col items-center justify-center gap-5" key={user.id}>
                <Image src={user.picture} alt={user.firstName} width={100} height={100} className="rounded-full" />
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>

              </div>
            ))
          }

        </div>
      </div>

    </>
  )
}
