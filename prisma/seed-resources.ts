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

async function main() {
  console.log("Maqolalarni yangilash boshlandi...");
  
  // Eskilarini o'chirib, yangilarini qo'shamiz (yoki shunchaki qo'shamiz)
  // Bu yerda title bo'yicha tekshirib, yo'q bo'lsa qo'shamiz
  let count = 0;
  for (const article of articles) {
    const existing = await prisma.resource.findFirst({ where: { title: article.title }});
    if (!existing) {
        await prisma.resource.create({ data: article });
        count++;
    } else {
        // Agar mavjud bo'lsa, URLni yangilab qo'yamiz
        await prisma.resource.update({
            where: { id: existing.id },
            data: { url: article.url }
        });
    }
  }
  
  console.log("Maqolalar muvaffaqiyatli yangilandi!");
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
