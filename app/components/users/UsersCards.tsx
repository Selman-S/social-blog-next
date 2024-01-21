import { Owner } from "@/types/types"
import UserCard from "./UserCard"
import { Box } from "@mui/material"
import { reduxStore } from "@/lib/redux"
import { getUsersWithThunk } from "@/lib/redux/slices/userSlice/thunks"


const UsersCards = async () => {
 await reduxStore.dispatch(getUsersWithThunk())
 const users = reduxStore.getState().user.data
 console.log(users);

 return (
  <Box sx={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
   users
   {/* {users.map((user) => (
    <UserCard user={user} key={user.id} />
   ))} */}
  </Box>
 )
}

export default UsersCards