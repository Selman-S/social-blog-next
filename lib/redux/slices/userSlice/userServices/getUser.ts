import {   UserFull} from "@/types/types";


export const getUser = async (id:string): Promise<{ data: UserFull }> => {
 const headers = new Headers();
 headers.append('Content-Type', 'application/json');
 headers.append('app-id', process.env.NEXT_PUBLIC_APP_ID || '');

 const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + `/user/${id}`, {
  method: "GET",
  headers: headers,
  cache: "no-store",
 });

 const responseData = await response.json(); // Extract JSON data from the response
console.log('responseData', responseData);
 return responseData
}


