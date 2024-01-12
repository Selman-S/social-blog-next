
import { postSlice, selectPost } from "@/lib/redux"
import useAxios from "./useAxios"
import { useDispatch } from "react-redux"


const usePostCall = () => {

 const dispatch = useDispatch()
 const { axiosWithAppId } = useAxios()

 const getPost = async () => {

  try {
   const response = await axiosWithAppId('/post')
   console.log(response.data);
   dispatch(postSlice.actions.setPost(response.data.data))

   return response
  } catch (error) {
   console.log(error);

  }

 }
 return { getPost }



}

export default usePostCall