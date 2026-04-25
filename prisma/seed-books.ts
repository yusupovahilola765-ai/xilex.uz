import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const books = [
  {
    title: "Kutubxonashunoslik (Zuhra Berdiyeva)",
    description: "Kutubxona ishining nazariy va uslubiy asoslari, kutubxona tizimlari tarixi va ularni zamonaviy texnologiyalar yordamida boshqarish bo'yicha oliy o'quv yurtlari talabalari uchun asosiy darslik.",
    type: "BOOK",
    url: "https://n.ziyouz.com/books/kollej_va_otm_darsliklari/axborot_texnologiyalari/Kutubxonashunoslik%20(Zuhra%20Berdiyeva).pdf"
  },
  {
    title: "Kutubxonashunoslik, arxivshunoslik, kitobshunoslik nazariyasi va tarixi",
    description: "Axborot-kutubxona sohasining tarixi, nazariyasi va arxiv ishi bilan bog'liqlik jihatlarini yorituvchi keng qamrovli darslik.",
    type: "BOOK",
    url: "https://jdpu.uz/wp-content/uploads/2021/03/Kutubxonashunoslik-arxivshunoslik-kitobshunoslik-nazariyasi-va-tarixi.pdf"
  },
  {
    title: "Kutubxonashunoslik (O'quv qo'llanma)",
    description: "Amaliy kutubxonachilik ishi, fondlarni tashkil etish va kitobxonlarga xizmat ko'rsatishning zamonaviy uslublari haqida o'quv qo'llanma.",
    type: "BOOK",
    url: "https://api.ziyonet.uz/uploads/books/26622/55d5b5d21649a.pdf"
  },
  {
    title: "Архивоведение: теория и методика (Е.М. Бурова)",
    description: "Arxiv ishi nazariyasi va metodologiyasi bo'yicha rus tilidagi eng nufuzli darsliklardan biri. Hujjatlarni saqlash va tizimlashtirishning jahon tajribasi.",
    type: "BOOK",
    url: "https://gsuda.gospmr.org/wp-content/uploads/2021/01/Бурова-Е.М.-и-др.-Архивоведение-теория-и-методика-2012_compressed-3.pdf"
  }
];

async function main() {
  console.log("Kitoblarni yangilash boshlandi...");
  let count = 0;
  for (const book of books) {
    const existing = await prisma.resource.findFirst({ where: { title: book.title }});
    if (!existing) {
        await prisma.resource.create({ data: book });
        count++;
    } else {
        await prisma.resource.update({
            where: { id: existing.id },
            data: { url: book.url, description: book.description }
        });
    }
  }
  
  console.log("Barcha kitoblar muvaffaqiyatli yangilandi!");
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
