import { reduxStore } from "@/lib/redux"
import { getUserWithThunk } from "@/lib/redux/slices/userSlice/thunks"

interface UserDetailPageProps {
  params: {
    user: string
  }
}

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  await reduxStore.dispatch(getUserWithThunk(params.user))
  const userState = reduxStore.getState().user.userDetail


  return (
    <div>
      {userState?.firstName} {userState?.lastName}
    </div>
  )
}

export default UserDetailPage