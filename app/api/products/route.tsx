import { NextRequest, NextResponse } from "next/server";
import schema from './schema'
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.products.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const valid = schema.safeParse(body);
  if (!valid.success)
    return NextResponse.json(valid.error.errors, { status: 400 });

  const newProducts = await prisma.products.create({
    data: {
      name: body.proName,
      price: body.price
    }
  });
  return NextResponse.json(newProducts, { status: 201 });
}   
