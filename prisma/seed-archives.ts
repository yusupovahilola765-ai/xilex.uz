import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const archiveTerms = [
  { 
    wordUz: "Arxiv ishi", 
    wordRu: "Архивное дело", 
    wordEn: "Archival affairs", 
    definition: "Arxiv hujjatlarini yig'ish, saqlash, hisobga olish va ulardan foydalanishni tashkil etish bo'yicha faoliyat.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Arxivchi", 
    wordRu: "Архивариус / Архивист", 
    wordEn: "Archivist", 
    definition: "Arxiv hujjatlari bilan ishlovchi, ularni saqlovchi va tartibga soluvchi malakali mutaxassis.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Davlat arxivi", 
    wordRu: "Государственный архив", 
    wordEn: "State archive", 
    definition: "Davlat miqyosidagi qimmatli hujjatlarni doimiy saqlovchi va jamiyatga xizmat ko'rsatuvchi muassasa.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Idoraviy arxiv", 
    wordRu: "Ведомственный архив", 
    wordEn: "Departmental archive", 
    definition: "Muayyan tashkilot yoki idoraning o'z faoliyati davomida yaratilgan hujjatlarini saqlash joyi.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Shaxsiy arxiv", 
    wordRu: "Личный архив", 
    wordEn: "Personal archive", 
    definition: "Alohida shaxs yoki oila tomonidan yig'ilgan va ularning hayoti hamda faoliyatiga oid hujjatlar to'plami.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Hujjatlarni ekspertiza qilish", 
    wordRu: "Экспертиза ценности документов", 
    wordEn: "Appraisal of documents", 
    definition: "Hujjatlarning ilmiy, tarixiy va amaliy ahamiyatini aniqlash va ularni saqlash muddatlarini belgilash jarayoni.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Doimiy saqlanadigan hujjatlar", 
    wordRu: "Документы постоянного хранения", 
    wordEn: "Permanently stored documents", 
    definition: "Tarixiy, ilmiy yoki madaniy ahamiyatga ega bo'lganligi sababli yo'q qilinmaydigan, mangu saqlanadigan hujjatlar.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Vaqtincha saqlanadigan hujjatlar", 
    wordRu: "Документы временного хранения", 
    wordEn: "Temporarily stored documents", 
    definition: "Ma'lum bir (masalan, 5, 10 yoki 75 yil) saqlash muddatiga ega bo'lgan, asosan amaliy va ma'muriy maqsadlar uchun kerakli hujjatlar.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Arxiv ma'lumotnomasi", 
    wordRu: "Архивная справка", 
    wordEn: "Archive certificate", 
    definition: "Arxiv hujjatlari asosida tayyorlangan va yuridik kuchga ega bo'lgan rasmiy tasdiqlovchi hujjat.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Hujjatlarni restavratsiya qilish", 
    wordRu: "Реставрация документов", 
    wordEn: "Restoration of documents", 
    definition: "Vaqt o'tishi bilan zararlangan yoki yirtilgan arxiv hujjatlarini jismoniy va kimyoviy usullar bilan qayta tiklash.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Maxfiylikdan chiqarish", 
    wordRu: "Рассекречивание", 
    wordEn: "Declassification", 
    definition: "Davlat siri yoki xizmat siri hisoblangan hujjatlarga qo'yilgan cheklovlarni olib tashlash va ularni ommaviy foydalanishga ochish jarayoni.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Arxiv shifri", 
    wordRu: "Архивный шифр", 
    wordEn: "Archive cipher", 
    definition: "Hujjatning arxivdagi aniq joylashuvini ko'rsatuvchi maxsus raqamlar va harflar ketma-ketligi (fond, ro'yxat, yig'majild raqamlari).", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Yig'majild (Delo)", 
    wordRu: "Дело", 
    wordEn: "File / Dossier", 
    definition: "Bir xil mavzu yoki masalaga oid arxiv hujjatlarining alohida papkada tizimlashtirilgan to'plami.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Arxiv fondi", 
    wordRu: "Архивный фонд", 
    wordEn: "Archive fond", 
    definition: "Tarixiy yoki mantiqiy jihatdan bir-biri bilan uzviy bog'liq bo'lgan arxiv hujjatlarining eng yirik majmuasi.", 
    category: "Arxiv ishi" 
  },
  { 
    wordUz: "Fond yaratuvchi", 
    wordRu: "Фондообразователь", 
    wordEn: "Fonds creator", 
    definition: "Faoliyati natijasida hujjatlar to'plami (arxiv fondi) shakllangan yuridik yoki jismoniy shaxs.", 
    category: "Arxiv ishi" 
  }
];

async function main() {
  console.log("Arxiv ishi bo'yicha terminlarni qo'shish boshlandi...");
  let count = 0;
  for (const term of archiveTerms) {
    const existing = await prisma.term.findFirst({ where: { wordUz: term.wordUz }});
    if (!existing) {
        await prisma.term.create({ data: term });
        count++;
    }
  }
  
  console.log(`${count} ta yangi Arxiv ishi termini muvaffaqiyatli qo'shildi!`);
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
