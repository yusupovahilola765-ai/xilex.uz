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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var count, _i, terms_1, term, existing;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Uchinchi partiya terminlarni qo'shish boshlandi...");
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
