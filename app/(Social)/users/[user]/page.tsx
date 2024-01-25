
import UserLeftSide from "@/app/components/user/UserLeftSide"
import { reduxStore } from "@/lib/redux"
import { getUserWithThunk } from "@/lib/redux/slices/userSlice/thunks"
import { UserFull } from "@/types/types"
import axios from "axios"

interface UserDetailPageProps {
  params: {
    user: string
  }
}
const getUserById = async (id: string): Promise<UserFull | undefined> => {
  // Your code here


  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/${id}`, {
      headers: {
        'app-id': process.env.NEXT_PUBLIC_APP_ID
      }
    })
    console.log(response.data);


    return response.data
  } catch (error) {
    console.log(error);

  }
}



const UserDetailPage = async ({ params }: UserDetailPageProps) => {

  const user = getUserById(params.user)
  console.log(user);



  return (
    <div className=" flex">
      <UserLeftSide />
      <div className="p-5">
        sadas

      </div>


    </div>
  )
}

export default UserDetailPage
