import { Post, Posts } from "@/types/postType";
import { fetcher } from "./fetcher";

// Get List,
// Get List By User, Get List By Tag, Get Post By Id,
// Create Post, Update Post, Delete Post

export const fetchPost = async (
  
): Promise<{ data : Posts }> => {
 const response = await fetcher('/post')
 return response;
}


