import axios from "axios"
const useAxios = () => {

 console.log('axios call')
 const axiosWithAppId = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
   'app-id': process.env.NEXT_PUBLIC_APP_ID
  }
 })


 return { axiosWithAppId }
}

export default useAxios