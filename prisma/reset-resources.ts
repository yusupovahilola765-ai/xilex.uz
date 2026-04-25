import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const articles = [
  {
    title: "Axborot-kutubxona xizmatida forumlarni tashkil etish",
    description: "Ushbu maqola axborot-kutubxona xizmatida zamonaviy muloqot shakllari, forumlar va ularning kitobxonlar bilan aloqani mustahkamlashdagi o'rni haqida.",
    type: "ARTICLE",
    url: "https://cyberleninka.ru/article/n/axborot-kutubxona-xizmatida-forumlarni-tashkil-etish"
  },
  {
    title: "Axborot-kutubxona fondining o'ziga xos belgi va xususiyatlari",
    description: "Maqolada axborot-kutubxona fondlarining shakllanishi, ularning tarkibi, saqlanishi va foydalanish xususiyatlari ilmiy tahlil qilingan.",
    type: "ARTICLE",
    url: "https://cyberleninka.ru/article/n/axborot-kutubxona-fondining-o-ziga-xos-belgi-va-xususiyatlari"
  },
  {
    title: "Axborot-kutubxona muassasalarida zamonaviy informatsion texnologiyalarning o'rni",
    description: "Maqolada kutubxonalarda axborot-kommunikatsiya texnologiyalarini joriy etish, avtomatlashtirilgan tizimlar va ularning afzalliklari yoritilgan.",
    type: "ARTICLE",
    url: "https://cyberleninka.ru/article/n/axborot-kutubxona-muassasalarida-zamonaviy-informatsion-texnologiyalarning-o-rni"
  }
];

const books = [
  {
    title: "Kutubxonashunoslik (Zuhra Berdiyeva)",
    description: "Kutubxona ishining nazariy va uslubiy asoslari, kutubxona tizimlari tarixi va ularni zamonaviy texnologiyalar yordamida boshqarish bo'yicha oliy o'quv yurtlari talabalari uchun asosiy darslik.",
    type: "BOOK",
    url: "https://n.ziyouz.com/books/kollej_va_otm_darsliklari/axborot_texnologiyalari/Kutubxonashunoslik%20(Zuhra%20Berdiyeva).pdf"
  },
  {
    title: "Kutubxonashunoslik, arxivshunoslik nazariyasi va tarixi",
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
  console.log("Ma'lumotlarni tozalash va qayta yuklash boshlandi...");
  
  // Eskilarini o'chiramiz
  await prisma.resource.deleteMany({});
  
  // Yangilarini qo'shamiz
  for (const item of [...articles, ...books]) {
    await prisma.resource.create({ data: item });
  }
  
  console.log("Barcha resurslar (kitoblar va maqolalar) muvaffaqiyatli yangilandi!");
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
