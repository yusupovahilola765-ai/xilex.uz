import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const totalTerms = await prisma.term.count();
    const totalUsers = await prisma.user.count();
    const resources = await prisma.resource.findMany();
    const totalBooks = resources.filter(r => r.type === "BOOK").length;
    const totalArticles = resources.filter(r => r.type === "ARTICLE").length;

    return NextResponse.json({ totalTerms, totalUsers, totalBooks, totalArticles });
  } catch (error) {
    return NextResponse.json({ error: "Xatolik yuz berdi" }, { status: 500 });
  }
}
