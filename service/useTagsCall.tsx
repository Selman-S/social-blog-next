import { useDispatch } from "react-redux"
import useAxios from "./useAxios"


const useTagsCall = () => {
 const dispatch = useDispatch()
 const { axiosWithAppId } = useAxios()
 const getTags = async () => {

  try {
   const response = await axiosWithAppId(`/tag`)
   return response
  } catch (error) {
   console.log(error);
  }
 }


 return { getTags }
}

export default useTagsCall