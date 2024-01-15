import UserList from "@/app/components/users/UserList"
import { reduxStore } from "@/lib/redux"
import { getUsersWithThunk } from "@/lib/redux/slices/userSlice/thunks"



const Userspage = async () => {
  await reduxStore.dispatch(getUsersWithThunk())
  const userState = reduxStore.getState().user.data
  return (
    <div>
      <h1>User List</h1>
      <UserList users={userState} />
    </div>
  )
}

export default Userspage