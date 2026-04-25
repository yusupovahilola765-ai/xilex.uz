"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var terms = [
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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, terms_1, term;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Terminlarni qo'shish boshlandi...");
                    _i = 0, terms_1 = terms;
                    _a.label = 1;
                case 1:
                    if (!(_i < terms_1.length)) return [3 /*break*/, 4];
                    term = terms_1[_i];
                    // Agar bazada bor bo'lsa qo'shmaslik uchun oddiy tekshiruv qilsa ham bo'ladi, 
                    // lekin test uchun shunchaki create qilamiz
                    return [4 /*yield*/, prisma.term.create({
                            data: term
                        })];
                case 2:
                    // Agar bazada bor bo'lsa qo'shmaslik uchun oddiy tekshiruv qilsa ham bo'ladi, 
                    // lekin test uchun shunchaki create qilamiz
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("Barcha 25 ta termin muvaffaqiyatli qo'shildi!");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
