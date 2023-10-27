import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


export function GET(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    if (params.id > 10)
        return NextResponse.json({ error: 'User not Found!' }, { status: 404 })
    return NextResponse.json({id : 16912 , name : 'Ahita'})
    
}


