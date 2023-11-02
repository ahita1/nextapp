import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
// import { prisma } from '@/prisma/client'
import { PrismaClient } from '@prisma/client/edge'

    
    
    
// export async function GET(request: NextRequest) {
//     const users =await prisma.user.findMany()
//     // console.log("next response", NextResponse.json(users));
//     // console.log(users);
//     return NextResponse.json(users);
// }
const prisma = new PrismaClient()
export async  function GET(request: NextRequest) {
    console.log('heyy nigga haha');
    const users = await prisma.user.findMany()
    // console.log(NextResponse.json(users));
    return NextResponse.json(users);
}



export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}


