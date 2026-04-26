import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const resources = await prisma.resource.findMany({ 
      orderBy: { createdAt: "desc" } 
    });
    return NextResponse.json(resources);
  } catch (error) {
    return NextResponse.json({ error: "Xatolik yuz berdi" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { title, description, type, url } = await req.json();
    const resource = await prisma.resource.create({ 
      data: { title, description, type, url } 
    });
    return NextResponse.json(resource);
  } catch (error) {
    return NextResponse.json({ error: "Xatolik yuz berdi" }, { status: 500 });
  }
}
