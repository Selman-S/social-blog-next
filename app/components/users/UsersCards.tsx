import { Owner } from "@/types/types"
import UserCard from "./UserCard"
import { Box } from "@mui/material"
import { reduxStore } from "@/lib/redux"
import { getUsersWithThunk } from "@/lib/redux/slices/userSlice/thunks"


const UsersCards = async () => {
 const users = reduxStore.getState().user.data
 return (
  <>
   <div className="flex gap-1 flex-wrap">
    users
    {users.map((user) => (
     <UserCard user={user} key={user.id} />
    ))}
   </div>
  </>
 )
}

export default UsersCards