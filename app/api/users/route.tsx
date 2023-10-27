import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id : 1 , name : 'Ahita'},
        {id : 2 , name : 'Solomon'},
        {id : 3 , name : 'Andualem'},
        {id : 4 , name : 'Muluken'},
    ])
}