import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import  prisma  from "@/prisma/client"; // Corrected import statement

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    console.log("next response", NextResponse.json(users));
    
    return NextResponse.json(users);
}
// [
//     {id : 1 , name : 'Ahita'},
//     {id : 1 , name : 'Solomon'},
//     {id : 1 , name : 'Andi'},
//     {id : 1 , name : 'Mule'}
// ]

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
