
import { reduxStore } from "@/lib/redux"
import { getPostByIdWithThunk, getPostsWithThunk } from "@/lib/redux/slices/postSlice/thunks"
import { Skeleton } from "@mui/material"


interface PostPageProps {
  params: {
    post: string
  }
}

const PostDetailPage = async ({ params }: PostPageProps) => {

  await reduxStore.dispatch(getPostByIdWithThunk(params.post))
  const post = reduxStore.getState().post.postDetail


  if (!post || !post.text) return (
    <Skeleton variant="rectangular" width={210} height={118} />)
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10">

        <img src={post.image} alt={post.text} className="w-1/2 h-1/2" />
        <h1 className="text-2xl font-bold mt-5">{post.owner.firstName + ' ' + post.owner.lastName}</h1>
        <p className="text-sm text-gray-500">{post.publishDate}</p>
        <p className="text-lg mt-5">{post.text}</p>
      </div>

    </div>
  )
}

export default PostDetailPage