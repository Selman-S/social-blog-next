import {  Post, PostFull, Posts} from "@/types/types";

// Get List,
// Get List By User, Get List By Tag, Get Post By Id,
// Create Post, Update Post, Delete Post

export const getPost = async (id:string): Promise<{ data : PostFull }> => {


  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('app-id', process.env.NEXT_PUBLIC_APP_ID || '');
 
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + `/post/${id}`, {
   method: "GET",
   headers: headers,
  });
 
  const result = await response.json();

  
 

 return result;
}


