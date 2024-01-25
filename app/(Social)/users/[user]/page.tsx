
import ProfileDetail from "@/app/components/user/ProfileDetail"
import UserLeftSide from "@/app/components/user/UserLeftSide"
import { coloredToast } from "@/lib/sweetalertToast/config"
import { UserFull } from "@/types/types"
import axios from "axios"

interface UserDetailPageProps {
  params: {
    user: string
  }
}
const getUserById = async (id: string): Promise<UserFull | undefined> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/${id}`, {
      headers: {
        'app-id': process.env.NEXT_PUBLIC_APP_ID
      }
    })

    return response.data
  } catch (error) {
    console.log(error);
    coloredToast("error", (error as Error).message)

  }
}



const UserDetailPage = async ({ params }: UserDetailPageProps) => {

  const user = getUserById(params.user)
  console.log(user);



  return (
    <div className=" flex">
      <UserLeftSide />
      <div className="p-5">
        <ProfileDetail />

      </div>


    </div>
  )
}

export default UserDetailPage
