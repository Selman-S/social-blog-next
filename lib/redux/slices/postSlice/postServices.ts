import { fetcherForThunk } from "@/service/fetcherForThunk";
import {  Posts} from "@/types/types";

// Get List,
// Get List By User, Get List By Tag, Get Post By Id,
// Create Post, Update Post, Delete Post

export const fetchPost = async (
  
): Promise<{ data : Posts }> => {
 const response = await fetcherForThunk('/post')
 return response;
}


