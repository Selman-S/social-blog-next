import UserList from "../components/homepage/UserList"
import PostList from "../components/homepage/PostList"
import Sponsored from "../components/homepage/Sponsored"


export default async function Home() {

  return (
    <>
      <div className=" flex flex-nowrap gap-2 mx-auto justify-between max-w-[1960px] ">
        <UserList />
        <PostList />
        <Sponsored />
      </div>

    </>
  )
}
