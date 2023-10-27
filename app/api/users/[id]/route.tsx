import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


export function GET(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    if (params.id > 10)
        return NextResponse.json({ error: 'User not Found!' }, { status: 404 })
    return NextResponse.json({id : 16912 , name : 'Ahita'})
    
}
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: number } }) {
  
    // validate the request body
    const body = await request.json()
    if (!body.name)
        return NextResponse.json({ error: 'Name is required!' }, { status: 400 })
    
    // if invalid  , return 400
    // fetch the user with the given id
    // if it doesn't exist , return 404

    if (params.id > 10)
        return NextResponse.json({error : 'User Not Found'} , {status : 404})
    // update the user
    // return the updated user
    return NextResponse.json({id : 1 , name : body.name})
    
}


export function DELETE(request: NextRequest ,  { params }: { params: { id: number } }) {
    // fetch the user from the db
    // if not found return 404
    if (params.id > 10)
        return NextResponse.json({error : 'User Not Found!'})
    // delete the user
    // return 200 i.e status ok
    return NextResponse.json({})
}

