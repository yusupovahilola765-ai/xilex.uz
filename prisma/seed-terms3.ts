import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const terms = [
  { wordUz: "Bibliografik tavsif", wordRu: "Библиографическое описание", wordEn: "Bibliographic description", definition: "Hujjatni aniqlash uchun zarur bo‘lgan muallif, nom, nashr joyi va yil kabi ma’lumotlar majmuasi.", category: "Kutubxonashunoslik" },
  { wordUz: "Bibliografik yozuv", wordRu: "Библиографическая запись", wordEn: "Bibliographic record", definition: "Katalog yoki ma’lumotlar bazasida hujjat haqida berilgan to‘liq yozuv.", category: "Kutubxonashunoslik" },
  { wordUz: "Klassifikatsiya", wordRu: "Классификация", wordEn: "Classification", definition: "Adabiyotlarni mavzu yoki mazmuniga ko‘ra guruhlarga ajratish tizimi.", category: "Kutubxonashunoslik" },
  { wordUz: "Kutubxona klassifikatsiyasi", wordRu: "Библиотечная классификация", wordEn: "Library classification", definition: "Kitoblarni ma’lum tartibda joylashtirish va izlashni osonlashtiruvchi tizim.", category: "Kutubxonashunoslik" },
  { wordUz: "UDK (Universal o‘nlik klassifikatsiya)", wordRu: "УДК", wordEn: "UDC (Universal Decimal Classification)", definition: "Fan va bilimlarni raqamlar orqali tartiblovchi xalqaro klassifikatsiya tizimi.", category: "Kutubxonashunoslik" },
  { wordUz: "BBK (Kutubxona-bibliografik klassifikatsiya)", wordRu: "ББК", wordEn: "Library-Bibliographic Classification", definition: "Kutubxona fondlarini tizimlashtirish uchun qo‘llaniladigan klassifikatsiya tizimi.", category: "Kutubxonashunoslik" },
  { wordUz: "Predmet rubrikasi", wordRu: "Предметная рубрика", wordEn: "Subject heading", definition: "Hujjat mazmunini ifodalovchi asosiy mavzu nomi.", category: "Kutubxonashunoslik" },
  { wordUz: "Deskriptor", wordRu: "Дескриптор", wordEn: "Descriptor", definition: "Ma’lumot qidirishda ishlatiladigan standartlashtirilgan kalit so‘z.", category: "Kutubxonashunoslik" },
  { wordUz: "Indekslash", wordRu: "Индексирование", wordEn: "Indexing", definition: "Hujjatga qidiruv uchun maxsus belgilar yoki kodlar berish jarayoni.", category: "Kutubxonashunoslik" },
  { wordUz: "Annotatsiya", wordRu: "Аннотация", wordEn: "Annotation", definition: "Hujjatning qisqacha mazmuni va ahamiyatini ifodalovchi matn.", category: "Kutubxonashunoslik" },
  { wordUz: "Referativ axborot", wordRu: "Реферативная информация", wordEn: "Abstract information", definition: "Hujjat mazmunini qisqa shaklda bayon qiluvchi ma’lumot.", category: "Kutubxonashunoslik" },
  { wordUz: "Axborot-qidiruv tizimi", wordRu: "Информационно-поисковая система", wordEn: "Information retrieval system", definition: "Ma’lumotlarni izlash va topish uchun mo‘ljallangan tizim.", category: "Axborot texnologiyalari" },
  { wordUz: "Kutubxona fondi", wordRu: "Библиотечный фонд", wordEn: "Library collection", definition: "Kutubxonada mavjud barcha hujjatlar majmuasi.", category: "Kutubxonashunoslik" },
  { wordUz: "Fondni to‘ldirish", wordRu: "Комплектование фонда", wordEn: "Collection development", definition: "Yangi adabiyotlar bilan kutubxona fondini boyitish jarayoni.", category: "Kutubxonashunoslik" },
  { wordUz: "Fondni hisobga olish", wordRu: "Учет фонда", wordEn: "Collection accounting", definition: "Kutubxona resurslarini ro‘yxatga olish va nazorat qilish jarayoni.", category: "Kutubxonashunoslik" },
  { wordUz: "Fondni saqlash", wordRu: "Хранение фонда", wordEn: "Collection preservation", definition: "Hujjatlarni fizik va elektron shaklda himoya qilish jarayoni.", category: "Kutubxonashunoslik" },
  { wordUz: "Fondni inventarizatsiya qilish", wordRu: "Инвентаризация фонда", wordEn: "Inventory of collection", definition: "Kutubxona fondini tekshirish va ro‘yxatini yangilash jarayoni.", category: "Kutubxonashunoslik" },
  { wordUz: "Kutubxona xizmati", wordRu: "Библиотечное обслуживание", wordEn: "Library service", definition: "Foydalanuvchilarga axborot va resurslar taqdim etish jarayoni.", category: "Kutubxonashunoslik" },
  { wordUz: "Axborot xizmati", wordRu: "Информационное обслуживание", wordEn: "Information service", definition: "Foydalanuvchilarga zarur ma’lumotlarni taqdim etish faoliyati.", category: "Kutubxonashunoslik" },
  { wordUz: "Abonement", wordRu: "Абонемент", wordEn: "Lending service", definition: "Kitoblarni vaqtincha uyga berish xizmati.", category: "Kutubxonashunoslik" },
  { wordUz: "O‘quv zali", wordRu: "Читальный зал", wordEn: "Reading room", definition: "Kitoblarni joyida o‘qish uchun mo‘ljallangan hudud.", category: "Kutubxonashunoslik" },
  { wordUz: "Elektron katalog", wordRu: "Электронный каталог", wordEn: "Online catalog", definition: "Kutubxona resurslarini raqamli shaklda aks ettiruvchi tizim.", category: "Kutubxonashunoslik" },
  { wordUz: "Axborot madaniyati", wordRu: "Информационная культура", wordEn: "Information culture", definition: "Axborotdan to‘g‘ri foydalanish ko‘nikmalari majmuasi.", category: "Kutubxonashunoslik" },
  { wordUz: "Bibliografik ko‘rsatkich", wordRu: "Библиографический указатель", wordEn: "Bibliographic index", definition: "Muayyan mavzu bo‘yicha adabiyotlar ro‘yxati.", category: "Kutubxonashunoslik" },
  { wordUz: "Tematik ko‘rsatkich", wordRu: "Тематический указатель", wordEn: "Thematic index", definition: "Ma’lum mavzu bo‘yicha tuzilgan axborot ro‘yxati.", category: "Kutubxonashunoslik" },
  { wordUz: "Axborot manbasi", wordRu: "Источник информации", wordEn: "Information source", definition: "Ma’lumot olinadigan hujjat yoki resurs.", category: "Umumiy" },
  { wordUz: "Elektron arxiv", wordRu: "Электронный архив", wordEn: "Digital archive", definition: "Raqamli hujjatlarni saqlash tizimi.", category: "Arxiv ishi" },
  { wordUz: "Axborot uzatish", wordRu: "Передача информации", wordEn: "Information transmission", definition: "Ma’lumotlarni bir joydan ikkinchi joyga yetkazish jarayoni.", category: "Axborot texnologiyalari" },
  { wordUz: "Kutubxona tarmog‘i", wordRu: "Библиотечная сеть", wordEn: "Library network", definition: "Bir-biriga bog‘langan kutubxonalar tizimi.", category: "Kutubxonashunoslik" },
  { wordUz: "Elektron nashr", wordRu: "Электронное издание", wordEn: "Electronic publication", definition: "Raqamli shaklda chop etilgan adabiyot.", category: "Kutubxonashunoslik" },
  { wordUz: "Axborot tizimlashtirish", wordRu: "Систематизация информации", wordEn: "Information systematization", definition: "Ma’lumotlarni tartibga solish va guruhlash jarayoni.", category: "Axborot texnologiyalari" },
  { wordUz: "Bibliometrik tahlil", wordRu: "Библиометрический анализ", wordEn: "Bibliometric analysis", definition: "Ilmiy nashrlarni statistik usulda o‘rganish.", category: "Kutubxonashunoslik" },
  { wordUz: "Axborot qidiruvi", wordRu: "Информационный поиск", wordEn: "Information retrieval", definition: "Kerakli ma’lumotni topish jarayoni.", category: "Axborot texnologiyalari" },
  { wordUz: "Axborot oqimi", wordRu: "Информационный поток", wordEn: "Information flow", definition: "Ma’lumotlarning uzluksiz harakati.", category: "Axborot texnologiyalari" },
  { wordUz: "Kutubxona marketingi", wordRu: "Библиотечный маркетинг", wordEn: "Library marketing", definition: "Kutubxona xizmatlarini targ‘ib qilish faoliyati.", category: "Kutubxonashunoslik" },
  { wordUz: "Foydalanuvchi ehtiyoji", wordRu: "Потребности пользователя", wordEn: "User needs", definition: "Foydalanuvchining axborotga bo‘lgan talabi.", category: "Umumiy" },
  { wordUz: "Axborot monitoringi", wordRu: "Мониторинг информации", wordEn: "Information monitoring", definition: "Ma’lumotlarni doimiy kuzatib borish jarayoni.", category: "Axborot texnologiyalari" },
  { wordUz: "Elektron xizmatlar", wordRu: "Электронные услуги", wordEn: "Electronic services", definition: "Internet orqali ko‘rsatiladigan kutubxona xizmatlari.", category: "Axborot texnologiyalari" },
  { wordUz: "Raqamli kutubxona tizimi", wordRu: "Цифровая библиотечная система", wordEn: "Digital library system", definition: "Elektron resurslarni boshqaruvchi kompleks tizim.", category: "Axborot texnologiyalari" },
  { wordUz: "Axborot infratuzilmasi", wordRu: "Информационная инфраструктура", wordEn: "Information infrastructure", definition: "Axborot tizimlarini qo‘llab-quvvatlovchi texnik va tashkiliy vositalar majmuasi.", category: "Axborot texnologiyalari" }
];

async function main() {
  console.log("Uchinchi partiya terminlarni qo'shish boshlandi...");
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
