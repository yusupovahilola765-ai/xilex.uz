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
var archiveTerms = [
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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var count, _i, archiveTerms_1, term, existing;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Arxiv ishi bo'yicha terminlarni qo'shish boshlandi...");
                    count = 0;
                    _i = 0, archiveTerms_1 = archiveTerms;
                    _a.label = 1;
                case 1:
                    if (!(_i < archiveTerms_1.length)) return [3 /*break*/, 5];
                    term = archiveTerms_1[_i];
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
                    console.log("".concat(count, " ta yangi Arxiv ishi termini muvaffaqiyatli qo'shildi!"));
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
