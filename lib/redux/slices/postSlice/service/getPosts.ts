import { Post, Posts } from "@/types/postType";

export const getPosts = async (
  
): Promise<{ data : Posts }> => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('app-id', process.env.NEXT_PUBLIC_APP_ID || '');

  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+"/post", {
    method: 'GET',
    headers: headers,
  });

  const result = await response.json();
console.log(result);

  return result;
}
