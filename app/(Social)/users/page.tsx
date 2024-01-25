import UsersLeftSide from "@/app/components/users/UsersLeftSide"
import UsersCards from "@/app/components/users/UsersCards"



const Userspage = () => {

  return (
    <div className=" flex">
      <UsersLeftSide />
      <div className="p-5">

        <UsersCards />
      </div>


    </div>
  )
}

export default Userspage