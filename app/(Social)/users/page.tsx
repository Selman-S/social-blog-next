import UserLeftSide from "@/app/components/users/UserLeftSide"
import UsersCards from "@/app/components/users/UsersCards"
import { reduxStore } from "@/lib/redux"
import { getUsersWithThunk } from "@/lib/redux/slices/userSlice/thunks"



const Userspage = async () => {
  await reduxStore.dispatch(getUsersWithThunk())
  const userState = reduxStore.getState().user.data
  return (
    <div className="flex">
      <UserLeftSide />
      <UsersCards users={userState} />


    </div>
  )
}

export default Userspage