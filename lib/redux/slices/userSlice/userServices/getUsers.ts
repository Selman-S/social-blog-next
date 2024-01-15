import {  Owner} from "@/types/types";



export const getUsers = async (): Promise<{ data: Owner[] }> => {
 const headers = new Headers();
 headers.append('Content-Type', 'application/json');
 headers.append('app-id', process.env.NEXT_PUBLIC_APP_ID || '');

 const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/user", {
  method: "GET",
  headers: headers,
 });

 const responseData = await response.json(); // Extract JSON data from the response

 return responseData
}


