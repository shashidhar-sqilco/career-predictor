import { getToken } from 'next-auth/jwt'
import withAuth from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession,   useSession } from 'next-auth/react';



export default withAuth(
 
    async function middleware(request: NextRequest) {
        const path = request.nextUrl.pathname;
        // Get the token from the cookies
         
      const token = await getToken({ req: request });
     
            console.log(token)

        // Define paths that are considered public (accessible without a token)
    const isPublicPath = path === '/sign-in' || path === '/sign-up' || path === '/verifyemail'
        //  const isPublicPath = path === '/sign-in' || path === '/sign-up' || path === '/verifyemail'

        // Redirect logic based on the path and token presence
        if (isPublicPath && token) {
            // If trying to access a public path with a token, redirect to the home page
            return NextResponse.redirect(new URL('/', request.url));
       
        }
         else if (!isPublicPath && !token) {
            // If trying to access a protected path without a token, redirect to the login page
          return NextResponse.redirect(new URL('/sign-in', request.url));
        }
    }
      , {
            callbacks: {
               async authorized() {
                 return true
                }
                
            }
    
    });
// It specifies the paths for which this middleware should be executed. 
// In this case, it's applied to '/', '/profile', '/login', and '/signup'.
export const config = {
    matcher: [ 
         
              '/profile',
              '/verifyemail',
              '/sign-in',
              '/sign-up']
}
