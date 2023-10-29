import { NextRequest, NextResponse } from "next/server";
import schema from './schema'

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id : 1 , proName : "Milk" , price : 20},
        {id : 2 , proName : "cheese" ,price : 25 },
        {id : 1 , proName : "meat" , price : 400},
        {id : 1 , proName : "Yoghurt" , price : 90}
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const valid = schema.safeParse(body)
    if (!valid.success)
        return NextResponse.json(valid.error.errors, { status: 400 })
    return NextResponse.json({id : 1 , proName : body.proName , price : body.price} , {status : 201} )
}   