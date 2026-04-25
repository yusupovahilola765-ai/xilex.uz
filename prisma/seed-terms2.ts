import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const terms = [
  { wordUz: "Axborot tizimi", wordRu: "Информационная система", wordEn: "Information system", definition: "Ma’lumotlarni yig‘ish, saqlash, qayta ishlash va uzatishni ta’minlovchi tizim.", category: "Axborot texnologiyalari" },
  { wordUz: "Elektron kutubxona", wordRu: "Электронная библиотека", wordEn: "Digital library", definition: "Raqamli shakldagi kitoblar va resurslarni saqlovchi va foydalanuvchiga taqdim etuvchi tizim.", category: "Kutubxonashunoslik" },
  { wordUz: "Ma’lumotlar bazasi", wordRu: "База данных", wordEn: "Database", definition: "Tuzilgan va tartiblangan ma’lumotlar to‘plami bo‘lib, ularni tezkor qidirish va boshqarish imkonini beradi.", category: "Axborot texnologiyalari" },
  { wordUz: "Katalog", wordRu: "Каталог", wordEn: "Catalog", definition: "Kutubxona fondidagi barcha resurslar haqidagi ma’lumotlarni o‘z ichiga olgan tizimli ro‘yxat.", category: "Kutubxonashunoslik" },
  { wordUz: "Bibliografiya", wordRu: "Библиография", wordEn: "Bibliography", definition: "Adabiyotlar va manbalar ro‘yxatini tuzish hamda tavsiflash tizimi.", category: "Kutubxonashunoslik" },
  { wordUz: "Axborot resursi", wordRu: "Информационный ресурс", wordEn: "Information resource", definition: "Foydalanish uchun mo‘ljallangan ma’lumotlar majmuasi.", category: "Kutubxonashunoslik" },
  { wordUz: "Qidiruv tizimi", wordRu: "Поисковая система", wordEn: "Search system", definition: "Ma’lumotlarni tez va aniq topishga xizmat qiluvchi dasturiy mexanizm.", category: "Axborot texnologiyalari" },
  { wordUz: "Interfeys", wordRu: "Интерфейс", wordEn: "Interface", definition: "Foydalanuvchi va tizim o‘rtasidagi o‘zaro aloqa vositasi.", category: "Axborot texnologiyalari" },
  { wordUz: "Avtomatlashtirish", wordRu: "Автоматизация", wordEn: "Automation", definition: "Jarayonlarni inson aralashuvisiz texnologiyalar orqali boshqarish.", category: "Axborot texnologiyalari" },
  { wordUz: "Metadata", wordRu: "Метаданные", wordEn: "Metadata", definition: "Ma’lumotlar haqida qo‘shimcha ma’lumot beruvchi tavsifiy axborot.", category: "Axborot texnologiyalari" },
  { wordUz: "Elektron hujjat", wordRu: "Электронный документ", wordEn: "Electronic document", definition: "Raqamli formatda yaratilgan va saqlanadigan hujjat.", category: "Arxiv ishi" },
  { wordUz: "Axborot xavfsizligi", wordRu: "Информационная безопасность", wordEn: "Information security", definition: "Ma’lumotlarni ruxsatsiz kirish va o‘zgartirishdan himoya qilish jarayoni.", category: "Axborot texnologiyalari" },
  { wordUz: "Autentifikatsiya", wordRu: "Аутентификация", wordEn: "Authentication", definition: "Foydalanuvchining haqiqiyligini tekshirish jarayoni.", category: "Axborot texnologiyalari" },
  { wordUz: "Terminologiya", wordRu: "Терминология", wordEn: "Terminology", definition: "Muayyan sohada qo‘llaniladigan atamalar tizimi.", category: "Kutubxonashunoslik" },
  { wordUz: "Indeksatsiya", wordRu: "Индексация", wordEn: "Indexing", definition: "Ma’lumotlarni tez topish uchun ularni maxsus belgilar bilan tartiblash jarayoni.", category: "Kutubxonashunoslik" },
  { wordUz: "Arxiv", wordRu: "Архив", wordEn: "Archive", definition: "Uzoq muddat saqlash uchun mo‘ljallangan hujjatlar to‘plami.", category: "Arxiv ishi" },
  { wordUz: "Elektron resurs", wordRu: "Электронный ресурс", wordEn: "Electronic resource", definition: "Raqamli shaklda mavjud bo‘lgan axborot manbai.", category: "Kutubxonashunoslik" },
  { wordUz: "Tarmoq", wordRu: "Сеть", wordEn: "Network", definition: "Kompyuterlar va qurilmalar o‘rtasidagi aloqa tizimi.", category: "Axborot texnologiyalari" },
  { wordUz: "Platforma", wordRu: "Платформа", wordEn: "Platform", definition: "Dasturiy xizmatlarni amalga oshirish uchun yaratilgan muhit.", category: "Axborot texnologiyalari" },
  { wordUz: "Integratsiya", wordRu: "Интеграция", wordEn: "Integration", definition: "Turli tizim va komponentlarni yagona tizimga birlashtirish jarayoni.", category: "Axborot texnologiyalari" },
  { wordUz: "Fond", wordRu: "Фонд", wordEn: "Collection", definition: "Kutubxonada saqlanadigan barcha adabiyotlar majmuasi.", category: "Kutubxonashunoslik" },
  { wordUz: "Kitob fondi", wordRu: "Книжный фонд", wordEn: "Book collection", definition: "Kutubxonadagi kitoblar yig‘indisi.", category: "Kutubxonashunoslik" },
  { wordUz: "Foydalanuvchi", wordRu: "Пользователь", wordEn: "User", definition: "Tizim yoki kutubxona xizmatlaridan foydalanuvchi shaxs.", category: "Umumiy" },
  { wordUz: "Elektron katalog", wordRu: "Электронный каталог", wordEn: "Online catalog", definition: "Kutubxona resurslari haqidagi ma’lumotlarni raqamli shaklda aks ettiruvchi tizim.", category: "Kutubxonashunoslik" },
  { wordUz: "Raqamlashtirish", wordRu: "Оцифровка", wordEn: "Digitization", definition: "An’anaviy ma’lumotlarni elektron shaklga o‘tkazish jarayoni.", category: "Arxiv ishi" },
  { wordUz: "Axborot texnologiyalari", wordRu: "Информационные технологии", wordEn: "Information technologies", definition: "Ma’lumotlarni qayta ishlash va uzatish uchun qo‘llaniladigan texnologiyalar majmuasi.", category: "Axborot texnologiyalari" },
  { wordUz: "Server", wordRu: "Сервер", wordEn: "Server", definition: "Ma’lumotlarni saqlovchi va foydalanuvchilarga uzatuvchi kompyuter tizimi.", category: "Axborot texnologiyalari" },
  { wordUz: "Fayl", wordRu: "Файл", wordEn: "File", definition: "Kompyuterda saqlanadigan ma’lumot birligi.", category: "Axborot texnologiyalari" },
  { wordUz: "Algoritm", wordRu: "Алгоритм", wordEn: "Algorithm", definition: "Muammoni yechish uchun ketma-ket bajariladigan amallar majmuasi.", category: "Axborot texnologiyalari" },
  { wordUz: "Dasturiy ta’minot", wordRu: "Программное обеспечение", wordEn: "Software", definition: "Kompyuter va tizimlarni boshqaruvchi dasturlar majmuasi.", category: "Axborot texnologiyalari" },
  { wordUz: "Veb-sayt", wordRu: "Веб-сайт", wordEn: "Website", definition: "Internet orqali kiriladigan sahifalar majmuasi.", category: "Axborot texnologiyalari" },
  { wordUz: "Brauzer", wordRu: "Браузер", wordEn: "Browser", definition: "Internet sahifalarini ko‘rish uchun mo‘ljallangan dastur.", category: "Axborot texnologiyalari" },
  { wordUz: "Kalit so‘z", wordRu: "Ключевое слово", wordEn: "Keyword", definition: "Qidiruv tizimida ma’lumot topish uchun ishlatiladigan asosiy so‘z.", category: "Axborot texnologiyalari" },
  { wordUz: "Annotatsiya", wordRu: "Аннотация", wordEn: "Annotation", definition: "Hujjat yoki kitobning qisqacha mazmuni.", category: "Kutubxonashunoslik" },
  { wordUz: "Referat", wordRu: "Реферат", wordEn: "Abstract", definition: "Ma’lumotning qisqacha tahliliy bayoni.", category: "Kutubxonashunoslik" },
  { wordUz: "Plagiat", wordRu: "Плагиат", wordEn: "Plagiarism", definition: "Boshqa muallif ishini o‘z nomidan ko‘rsatish holati.", category: "Umumiy" },
  { wordUz: "Bulutli texnologiya", wordRu: "Облачные технологии", wordEn: "Cloud technology", definition: "Ma’lumotlarni internet orqali saqlash va boshqarish texnologiyasi.", category: "Axborot texnologiyalari" },
  { wordUz: "Parol", wordRu: "Пароль", wordEn: "Password", definition: "Foydalanuvchini tizimga kirishda himoya qiluvchi maxfiy belgilar to‘plami.", category: "Axborot texnologiyalari" },
  { wordUz: "Ro‘yxatdan o‘tish", wordRu: "Регистрация", wordEn: "Registration", definition: "Tizimga kirish uchun foydalanuvchi ma’lumotlarini kiritish jarayoni.", category: "Umumiy" },
  { wordUz: "Modul", wordRu: "Модуль", wordEn: "Module", definition: "Tizimning alohida funksiyani bajaruvchi qismi.", category: "Axborot texnologiyalari" }
];

async function main() {
  console.log("Yangi 40 ta terminni qo'shish boshlandi...");
  let count = 0;
  for (const term of terms) {
    const existing = await prisma.term.findFirst({ where: { wordUz: term.wordUz }});
    if (!existing) {
        await prisma.term.create({ data: term });
        count++;
    }
  }
  
  console.log(`${count} ta yangi termin muvaffaqiyatli qo'shildi!`);
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
