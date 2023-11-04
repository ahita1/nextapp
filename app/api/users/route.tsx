import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from '@/prisma/client'

    
    
// export async function GET(request: NextRequest) {
//     const users =await prisma.user.findMany()
//     // console.log("next response", NextResponse.json(users));
//     // console.log(users);
//     return NextResponse.json(users);
// }

export async  function GET(request: NextRequest) {
    console.log('heyy nigga haha');
    const users = await prisma.user.findMany()
    if (!users)
        return NextResponse.json({error : "an error occurred haha"} , {status : 500})
    return NextResponse.json(users);
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}


