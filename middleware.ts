import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {

 
 if (true) {
  
  // return NextResponse.redirect(new URL('/login', request.url))
 }
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }