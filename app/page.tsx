import { getPost } from "@/lib/redux/slices/postSlice/thunks"
import { reduxStore } from "../lib/redux/store"


export default async function Home() {
  await reduxStore.dispatch(getPost())
  const post = reduxStore.getState().post.data[0]
  console.log('post ', reduxStore.getState().post.data[0]);

  return (
    <>
      {post.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.text}</h1>
            <p></p>
          </div>
        )

      }
      )}

    </>
  )
}
