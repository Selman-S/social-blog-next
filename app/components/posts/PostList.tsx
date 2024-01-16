import { postSlice, selectPost } from "@/lib/redux"
import usePostsCall from "@/service/usePostsCall"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PostCard from "./PostCard"
import { Post } from "@/types/types"


interface PostListProps {
 posts: Post[]
}

const PostList = ({ posts }: PostListProps) => {
 // const { getPosts } = usePostsCall()
 // const posts = useSelector(selectPost);

 // const { getPosts } = usePostsCall()
 // useEffect(() => {
 //  getPosts()
 // const data = getPosts()


 // }, [])



 return (
  <div className="w-[500px] mt-4">
   {posts?.map((post) => (
    <PostCard post={post} key={post.id} />
   ))}
  </div>
 )
}

export default PostList