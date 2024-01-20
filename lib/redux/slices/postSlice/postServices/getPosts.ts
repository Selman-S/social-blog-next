import {   Posts} from "@/types/types";

// Get List,
// Get List By User, Get List By Tag, Get Post By Id,
// Create Post, Update Post, Delete Post

export const getPosts = async (
  
): Promise<{ data : Posts }> => {


  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('app-id', process.env.NEXT_PUBLIC_APP_ID || '');
 
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/post", {
   method: "GET",
   headers: headers,
  });
 
  const result = await response.json();
 

 return result;
}


