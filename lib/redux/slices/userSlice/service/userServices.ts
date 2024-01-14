import {  Owner} from "@/types/types";
import { fetcher } from "./fetcher";

// Get List,
// Get List By User, Get List By Tag, Get Post By Id,
// Create Post, Update Post, Delete Post

export const fetchUser = async (
  
): Promise<{ data : Owner[] }> => {
 const response = await fetcher('/user')
 return response;
}


