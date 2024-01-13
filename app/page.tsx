import { getPost } from "@/lib/redux/slices/postSlice/thunks"
import { reduxStore } from "../lib/redux/store"
import Image from "next/image"


export default async function Home() {
  await reduxStore.dispatch(getPost())
  const post = reduxStore.getState().post.data


  return (
    <>
      {post && post.map((item, index) => (
        <div key={index}>
          <h1>{item.id}</h1>
          <p>{item.text}</p>
          <Image src={item.image} alt={item.text} width={300} height={300} />

        </div>
      ))}

    </>
  )
}
