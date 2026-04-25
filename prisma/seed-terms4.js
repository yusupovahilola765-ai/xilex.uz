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
    {
        wordUz: "Abbreviatura",
        wordRu: "Аббревиатура",
        wordEn: "Abbreviation",
        definition: "Qisqartma. Nom anglatuvchi ot birikmasidagi so‘zlarning bosh harfini yoki uni tashkil etuvchi so‘zlarining biror qismini olish yo‘li bilan hosil qilingan qisqartma ot.",
        category: "Boshqa"
    },
    {
        wordUz: "Abzats",
        wordRu: "Абзац",
        wordEn: "Paragraph",
        definition: "Satr boshi. Xat boshidan biroz joy qoldirish bilan belgilanadigan eng kichik kompozitsion qism.",
        category: "Boshqa"
    },
    {
        wordUz: "Abonement",
        wordRu: "Абонемент",
        wordEn: "Lending service",
        definition: "Ma’lum bir muddatga va ma’lum bir shart asosida bosma asarlarni va boshqa hujjatlarni kutubxonadan tashqariga berishni ko‘zda tutuvchi xizmat.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Abonement kartochkasi",
        wordRu: "Карточка абонемента / Читательский билет",
        wordEn: "Library card",
        definition: "Abonent nomlari (raqami) va u haqda ma’lumotlar qayd etilgan rasmiy qabul qilingan varaqa shakli.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Abonentlar guruhi",
        wordRu: "Группа абонентов",
        wordEn: "Subscriber group",
        definition: "Yoshi, ma’lumoti, kasbi va boshqa belgilariga ko‘ra farqlanadigan kitobxonlar guruhlariga moslashtirilgan holda xizmat ko‘rsatiladigan abonement.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Avantiul",
        wordRu: "Авантитул",
        wordEn: "Half title",
        definition: "Nashrning titul varag‘idan oldin joylashtiriladigan va kompozitsion bezak ifodasi bo'lgan birinchi beti.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Avtomatlashtirilgan axborot izlash tizimi (AAIT)",
        wordRu: "Автоматизированная информационно-поисковая система (АИПС)",
        wordEn: "Automated information retrieval system (AIRS)",
        definition: "Elektron hisoblash texnikasi asosida amalga oshirilgan axborot izlash tizimi.",
        category: "Axborot texnologiyalari"
    },
    {
        wordUz: "Avtomatlashtirilgan kutubxona tizimi (AKT)",
        wordRu: "Автоматизированная библиотечная система (АБС)",
        wordEn: "Automated library system (ALS)",
        definition: "Alohida kutubxona yoki kutubxonalar tizimidagi kutubxona jarayonlarini avtomatlashtirishni ta’minlovchi tizim.",
        category: "Axborot texnologiyalari"
    },
    {
        wordUz: "Avtoreferat",
        wordRu: "Автореферат",
        wordEn: "Author's abstract",
        definition: "Asar bilan dastlabki tanishuv uchun qo‘lyozma huquqida bosib chiqarilgan, muallif tomonidan tayyorlangan ilmiy ishning qisqacha bayoni.",
        category: "Boshqa"
    },
    {
        wordUz: "Adabiyot",
        wordRu: "Литература",
        wordEn: "Literature",
        definition: "Ijtimoiy ahamiyatga ega bo‘lgan yozma asar.",
        category: "Boshqa"
    },
    {
        wordUz: "Adabiy o‘yin",
        wordRu: "Литературная игра",
        wordEn: "Literary game",
        definition: "Yozuvchi ijodi yoki badiiy asar haqidagi ma’lumotni ma’lum qoida asosidagi o‘yin tarzida berish.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiy-badiiy nashr",
        wordRu: "Литературно-художественное издание",
        wordEn: "Literary and artistic publication",
        definition: "Badiiy adabiyot asarlaridan tashkil topgan nashr.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiy kecha",
        wordRu: "Литературный вечер",
        wordEn: "Literary evening",
        definition: "Adabiy mavzudagi ma’ruza va badiiy qismdan tashkil topgan ommaviy tadbir.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiyotni tushunish",
        wordRu: "Восприятие литературы",
        wordEn: "Understanding of literature",
        definition: "O‘qish jarayonida amalga oshiradigan va badiiy adabiyotning mazmuni va shaklini aks ettirishga qaratilgan kitobxonning murakkab ruhiy faoliyati.",
        category: "Boshqa"
    },
    {
        wordUz: "Adabiyotlar tanlovi",
        wordRu: "Отбор литературы",
        wordEn: "Literature selection",
        definition: "Kutubxona fondidagi adabiyotlami olish va saqlashning maqsadga muvofiqligini majmualashtirish jarayonidagi aniqlash yo‘sini.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiy to‘plam",
        wordRu: "Литературный сборник",
        wordEn: "Literary collection",
        definition: "Adabiy-badiiy asarlardan iborat bo‘lgan alohida bosma nashr yoki kitoblarning sistemalashtirilgan majmuasi.",
        category: "Boshqa"
    },
    {
        wordUz: "Adabiy bahs",
        wordRu: "Литературный спор / диспут",
        wordEn: "Literary debate",
        definition: "Kitobxonlar adabiyotining turli sohalariga tegishli bo‘lgan savollarga javob beradigan adabiy o‘yin turi.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiyotlar ko‘rgazmasi",
        wordRu: "Книжная выставка",
        wordEn: "Book exhibition",
        definition: "Adabiyotni ko‘rgazmali targ‘ib etishning asosiy shakli - maxsus saralangan va sistemalashtirilgan bosma asarlar majmui.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiyotlar ma’lumotnomasi",
        wordRu: "Библиографическая справка",
        wordEn: "Bibliographic reference",
        definition: "Bibliografik axborotning birlamchi hujjatlari va manbalari haqidagi ma’lumotlar bilan maslahat beruvchi qo‘llanma.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiyotga buyurtma berish",
        wordRu: "Заказ литературы",
        wordEn: "Ordering literature",
        definition: "Bosishga tayyorlanayotgan nashrlarga talabnomani rasmiylashtirilgan yo‘l bilan fondni kundalik komplektlashtirishni tashkil etish usuli.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiyotlarni targ‘ib qilish",
        wordRu: "Пропаганда литературы",
        wordEn: "Promotion of literature",
        definition: "Bosma asar haqidagi ma’lumotlarni kitobxonlarning madaniy darajasini oshirish maqsadida keng yoyish.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiyotlarni og‘zaki targ‘ib qilish",
        wordRu: "Устная пропаганда литературы",
        wordEn: "Oral promotion of literature",
        definition: "Jonli so‘z yordamida adabiyotni targ‘ib qilishdan iborat bo‘lgan kutubxona ommaviy ishi.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiyotlarning ko‘rgazmali targ'iboti",
        wordRu: "Наглядная пропаганда литературы",
        wordEn: "Visual promotion of literature",
        definition: "Kitobxonga ko‘rgazmali ta’sir o‘tkazish maqsadida turli ko‘rgazma vositalarini qo‘llash orqali adabiyotni targ‘ibot qilish.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiyotlarni nashr orqali targ‘ibot qilish",
        wordRu: "Печатная пропаганда литературы",
        wordEn: "Printed promotion of literature",
        definition: "Vaqtli matbuot va boshqa bosma axborot vositalari yordamida adabiyotni targ‘ib qilish.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adabiyotlarning eskirishi",
        wordRu: "Устаревание литературы",
        wordEn: "Obsolescence of literature",
        definition: "Vaqt o‘tishi bilan axborot olish maqsadida adabiyotdan foydalanishning kamayib borish jarayoni.",
        category: "Boshqa"
    },
    {
        wordUz: "Adabiy sud",
        wordRu: "Литературный суд",
        wordEn: "Literary trial",
        definition: "Adabiy o‘yin turi - dolzarb muammoli badiiy asarning teatrlashtirilgan shaklida uyushtirilgan muhokamasi.",
        category: "Kutubxonashunoslik"
    },
    {
        wordUz: "Adresli bibliografik ma’lumotnoma",
        wordRu: "Адресная библиографическая справка",
        wordEn: "Address bibliographic reference",
        definition: "Kerak bo‘lgan adabiyotning muayyan fondda bor yoki yo‘qligi va saqlanayotgan o‘rni haqida ma’lumotlarga ega bo‘lgan ma’lumotnoma.",
        category: "Kutubxonashunoslik"
    }
];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var count, _i, terms_1, term, existing;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("To'rtinchi partiya terminlarni qo'shish boshlandi...");
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
