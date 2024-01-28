
import PostsLeftSide from "@/app/components/posts/PostsLeftSide"
import PostsCards from "@/app/components/posts/PostsCards"




const PostsPage = () => {



  return (
    <div className=" flex">
      <PostsLeftSide />
      <div className="p-5 flex items-center flex-col">

        <PostsCards />
      </div>


    </div>
  )
}

export default PostsPage