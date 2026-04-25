import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Barcha maydonlarni to'ldiring" }, { status: 400 });
    }

    // Foydalanuvchi bazada bor yoki yo'qligini tekshirish
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json({ message: "Bu email manzil band!" }, { status: 400 });
    }

    // Parolni shifrlash
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yangi foydalanuvchini bazaga qo'shish (standart rol: USER)
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "USER" // Avtomatik oddiy foydalanuvchi bo'ladi
      }
    });

    return NextResponse.json({ message: "Muvaffaqiyatli ro'yxatdan o'tdingiz!" }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: "Xatolik yuz berdi" }, { status: 500 });
  }
}
