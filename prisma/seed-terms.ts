import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const terms = [
  { wordUz: "Katalog", wordRu: "Каталог", wordEn: "Catalog", category: "Kutubxonashunoslik", definition: "Kutubxonadagi mavjud kitoblar va resurslarning tizimlashtirilgan ro'yxati." },
  { wordUz: "Bibliografiya", wordRu: "Библиография", wordEn: "Bibliography", category: "Kutubxonashunoslik", definition: "Adabiyotlar ro'yxatini tuzish, kitoblarni tavsiflash va ularni tizimga solish ilmi." },
  { wordUz: "Annotatsiya", wordRu: "Аннотация", wordEn: "Annotation", category: "Kutubxonashunoslik", definition: "Kitob yoki maqolaning qisqacha mazmuni va maqsadi tushuntirilgan matn." },
  { wordUz: "Arxiv", wordRu: "Архив", wordEn: "Archive", category: "Arxiv ishi", definition: "Tarixiy hujjatlar, qo'lyozmalar va nodir asarlar saqlanadigan joy yoki muassasa." },
  { wordUz: "Shifr", wordRu: "Шифр", wordEn: "Call number", category: "Kutubxonashunoslik", definition: "Kitobning kutubxona javonidagi aniq o'rnini ko'rsatuvchi harf va raqamli belgi." },
  { wordUz: "Abonent", wordRu: "Абонент", wordEn: "Subscriber", category: "Kutubxonashunoslik", definition: "Kutubxonadan foydalanish huquqiga ega bo'lgan va doimiy a'zo bo'lgan shaxs." },
  { wordUz: "Formulyar", wordRu: "Формуляр", wordEn: "Library card", category: "Kutubxonashunoslik", definition: "Kitobxon haqida ma'lumotlar va u olgan kitoblar qayd etiladigan maxsus varaqasi." },
  { wordUz: "Kutubxonalararo abonement (KAA)", wordRu: "Межбиблиотечный абонемент", wordEn: "Interlibrary loan", category: "Kutubxonashunoslik", definition: "Bir kutubxonadagi kitobni boshqa kutubxona orqali vaqtincha olib turish tizimi." },
  { wordUz: "Referat", wordRu: "Реферат", wordEn: "Abstract", category: "Boshqa", definition: "Biror ilmiy asar, maqola yoki tadqiqotning qisqacha mazmuni bayoni." },
  { wordUz: "Katalogizatsiya", wordRu: "Каталогизация", wordEn: "Cataloging", category: "Kutubxonashunoslik", definition: "Kutubxona fondini tizimga solish uchun bibliografik yozuvlarni yaratish jarayoni." },
  { wordUz: "Elektron kutubxona", wordRu: "Электронная библиотека", wordEn: "Digital library", category: "Axborot texnologiyalari", definition: "Raqamli formatdagi kitoblar, jurnallar va hujjatlar to'plami." },
  { wordUz: "Fond", wordRu: "Фонд", wordEn: "Collection", category: "Kutubxonashunoslik", definition: "Kutubxonada saqlanadigan barcha turdagi axborot resurslari majmuasi." },
  { wordUz: "O'quv zali", wordRu: "Читальный зал", wordEn: "Reading room", category: "Kutubxonashunoslik", definition: "Kutubxonaning bevosita kitob va jurnallarni mutolaa qilish uchun ajratilgan maxsus xonasi." },
  { wordUz: "ISBN", wordRu: "ISBN", wordEn: "ISBN", category: "Boshqa", definition: "Xalqaro standart kitob raqami, har bir nashr uchun yagona bo'lgan identifikator." },
  { wordUz: "ISSN", wordRu: "ISSN", wordEn: "ISSN", category: "Boshqa", definition: "Xalqaro standart seriyali raqam, jurnallar va davriy nashrlar uchun identifikator." },
  { wordUz: "Monografiya", wordRu: "Монография", wordEn: "Monograph", category: "Kutubxonashunoslik", definition: "Biror mavzu yoki muammoga bag'ishlangan, chuqur o'rganilgan ilmiy asar." },
  { wordUz: "Ensiklopediya", wordRu: "Энциклопедия", wordEn: "Encyclopedia", category: "Kutubxonashunoslik", definition: "Barcha fanlar yoki biror soha bo'yicha tartiblangan ma'lumotlarni o'z ichiga olgan yirik asar." },
  { wordUz: "Davriy nashr", wordRu: "Периодическое издание", wordEn: "Periodical", category: "Kutubxonashunoslik", definition: "Ma'lum bir vaqt oralig'ida (kunlik, oylik) muntazam ravishda chiqib turadigan nashr." },
  { wordUz: "Qo'lyozma", wordRu: "Рукопись", wordEn: "Manuscript", category: "Arxiv ishi", definition: "Bosmaxonada chop etilmagan, qo'lda yozilgan asar yoki tarixiy hujjat." },
  { wordUz: "Raqamlashtirish", wordRu: "Оцифровка", wordEn: "Digitization", category: "Axborot texnologiyalari", definition: "An'anaviy (qog'oz) shakldagi ma'lumotlarni elektron ko'rinishga o'tkazish jarayoni." },
  { wordUz: "Indekslash", wordRu: "Индексирование", wordEn: "Indexing", category: "Axborot texnologiyalari", definition: "Hujjat mazmunini ifodalovchi kalit so'zlar yoki kodlarni belgilash jarayoni." },
  { wordUz: "Rubrikator", wordRu: "Рубрикатор", wordEn: "Rubricator", category: "Kutubxonashunoslik", definition: "Ma'lumotlarni sohalar bo'yicha tasniflash uchun mo'ljallangan iyerarxik tizim." },
  { wordUz: "Avtomatlashtirilgan kutubxona tizimi", wordRu: "Автоматизированная библиотечная система", wordEn: "Automated library system", category: "Axborot texnologiyalari", definition: "Kutubxona ishlarini dasturiy ta'minot yordamida boshqarish majmuasi." },
  { wordUz: "Dissertatsiya", wordRu: "Диссертация", wordEn: "Dissertation", category: "Boshqa", definition: "Ilmiy daraja olish uchun himoya qilinadigan maxsus tadqiqot ishi." },
  { wordUz: "Plagiat", wordRu: "Плагиат", wordEn: "Plagiarism", category: "Boshqa", definition: "Boshqa birovning asari yoki g'oyasini o'ziniki qilib ko'rsatish holati." }
];

async function main() {
  console.log("Terminlarni qo'shish boshlandi...");
  
  for (const term of terms) {
    // Agar bazada bor bo'lsa qo'shmaslik uchun oddiy tekshiruv qilsa ham bo'ladi, 
    // lekin test uchun shunchaki create qilamiz
    await prisma.term.create({
      data: term
    });
  }
  
  console.log("Barcha 25 ta termin muvaffaqiyatli qo'shildi!");
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
