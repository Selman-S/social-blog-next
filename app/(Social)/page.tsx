import UserList from "../components/users/UserList"
import PostList from "../components/posts/PostList"


export default async function Home() {






  return (
    <>
      <div className=" flex flex-wrap gap-5 mx-auto justify-between  ">

        <UserList />



        <div>
          <PostList />


        </div>
        <div>right</div>

      </div>

    </>
  )
}
