import UserLeftSide from "@/app/components/users/UserLeftSide"
import UsersCards from "@/app/components/users/UsersCards"



const Userspage = () => {

  return (
    <div className=" flex">
      <UserLeftSide />
      <div className="p-5">

        <UsersCards />
      </div>


    </div>
  )
}

export default Userspage