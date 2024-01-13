
export const fetcher = async (url: string, method = 'GET') => {
 const headers = new Headers();
 headers.append('Content-Type', 'application/json');
 headers.append('app-id', process.env.NEXT_PUBLIC_APP_ID || '');

 const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + url, {
  method,
  headers: headers,
 });

 const result = await response.json();


 return result;
}