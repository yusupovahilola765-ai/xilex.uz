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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var count, _i, terms_1, term, existing;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Yangi 40 ta terminni qo'shish boshlandi...");
                    count = 0;
                    _i = 0, terms_1 = terms;
                    _a.label = 1;
                case 1:
                    if (!(_i < terms_1.length)) return [3 /*break*/, 5];
                    term = terms_1[_i];
                    return [4 /*yield*/, prisma.term.findFirst({ where: { wordUz: term.wordUz } })];
                case 2:
                    existing = _a.sent();
                    if (!!existing) return [3 /*break*/, 4];
                    return [4 /*yield*/, prisma.term.create({ data: term })];
                case 3:
                    _a.sent();
                    count++;
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5:
                    console.log("".concat(count, " ta yangi termin muvaffaqiyatli qo'shildi!"));
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
