import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const adminEmail = 'admin@xilex.uz';
    const adminPassword = 'admin777';
    
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await prisma.user.upsert({
      where: { email: adminEmail },
      update: { password: hashedPassword },
      create: {
        name: 'Admin',
        email: adminEmail,
        password: hashedPassword,
        role: 'ADMIN',
      }
    });

    return NextResponse.json({ message: 'Admin muvaffaqiyatli yaratildi! Endi login qilsangiz bo\'ladi.' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

