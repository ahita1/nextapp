import { NextRequest, NextResponse } from "next/server";

import middleware from "next-auth/middleware";


export default middleware

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/newPage' , request.url))
// } 

export const config = {
    matcher : ['/dashboard/:path*']
}
