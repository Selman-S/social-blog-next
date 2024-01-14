import {  Owner} from "@/types/types";
import { fetcherForThunk } from "@/service/fetcherForThunk";


export const fetchUser = async (
  
): Promise<{ data : Owner[] }> => {
 const response = await fetcherForThunk('/user')
 return response;
}


