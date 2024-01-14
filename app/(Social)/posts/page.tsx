import CreatePost from "@/app/components/posts/CreatePost"
import PostList from "@/app/components/posts/PostList"




const PostsPage = () => {



  return (
    <div>
      <h1>Posts Page</h1>
      <CreatePost />
      <PostList />
    </div>
  )
}

export default PostsPage