import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import schema from '../schema'
import { prisma } from '@/prisma/client'

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where : {id : parseInt(params.id)}
    })
    if (!user)
        return NextResponse.json({ error: 'User not Found!' }, { status: 404 })
    return NextResponse.json(user)
}



// update the user  haha
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    
    // validate the request body
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })
    
    // if invalid  , return 400
    // fetch the user with the given id
    // if it doesn't exist , return 404

    const user = await prisma.user.findUnique({
        where : {id : parseInt(params.id)}
    })

    if (!user)
        return NextResponse.json({error : 'User Not Found'} , {status : 404})
    // update the user
    // return the updated user

    const updatedUser = await prisma.user.update({
        where: { id: user.id },
         data: {
             name: body.name,
             email : body.email
        }
    })
    return NextResponse.json(updatedUser)
    
}
// delete the user haha
export async function DELETE(request: NextRequest ,  { params }: { params: { id: string } }) {
    // fetch the user from the db
    // if not found return 404
    const user = await prisma.user.findUnique({
        where : {id : parseInt(params.id)}
    })
    if (!user)
        return NextResponse.json({error : 'User Not Found!'} , {status : 404})
    // delete the user
    // return 200 i.e status ok
    await prisma.user.delete({
       where : {id : user.id}
   })
    return NextResponse.json({})
}