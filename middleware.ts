import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export default function middleware  (request: NextRequest) {

 //  const { cookies } = request
 //  console.log(cookies.get('uid'));
  
 // if (cookies.get('uid') === undefined) {
  
 //  return NextResponse.redirect(new URL('/login', request.url))
 // }
 //  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }