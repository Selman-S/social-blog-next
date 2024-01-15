import { reduxStore } from "@/lib/redux"
import { getUserWithThunk } from "@/lib/redux/slices/userSlice/thunks"

interface UserDetailPageProps {
  params: {
    user: string
  }
}

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  await reduxStore.dispatch(getUserWithThunk(params.user))
  const userState = reduxStore.getState().user.data
  console.log(userState);

  return (
    <div>
      {userState.firstName}
    </div>
  )
}

export default UserDetailPage