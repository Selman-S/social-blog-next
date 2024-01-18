import UserList from "../components/users/UserList"
import PostList from "../components/homepage/PostList"
import Sponsored from "../components/homepage/Sponsored"


export default async function Home() {






  return (
    <>
      <div className=" flex flex-nowrap gap-5 mx-auto justify-between max-w-[1960px] ">

        <UserList />




        <PostList />


        <Sponsored />

      </div>

    </>
  )
}
