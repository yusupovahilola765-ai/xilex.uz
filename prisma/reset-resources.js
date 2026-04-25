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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var articles = [
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
var books = [
    {
        title: "Kutubxonashunoslik (Zuhra Berdiyeva)",
        description: "Kutubxona ishining nazariy va uslubiy asoslari, kutubxona tizimlari tarixi va ularni zamonaviy texnologiyalar yordamida boshqarish bo'yicha oliy o'quv yurtlari talabalari uchun asosiy darslik.",
        type: "BOOK",
        url: "https://n.ziyouz.com/books/kollej_va_otm_darsliklari/axborot_texnologiyalari/Kutubxonashunoslik%20(Zuhra%20Berdiyeva).pdf"
    },
    {
        title: "Kutubxonashunoslik, arxivshunoslik nazariyasi va tarixi",
        description: "Axborot-kutubxona sohasining tarixi, nazariyasi va arxiv ishi bilan bog'liqlik jihatlarini yorituvchi keng qamrovli darslik.",
        type: "BOOK",
        url: "https://jdpu.uz/wp-content/uploads/2021/03/Kutubxonashunoslik-arxivshunoslik-kitobshunoslik-nazariyasi-va-tarixi.pdf"
    },
    {
        title: "Kutubxonashunoslik (O'quv qo'llanma)",
        description: "Amaliy kutubxonachilik ishi, fondlarni tashkil etish va kitobxonlarga xizmat ko'rsatishning zamonaviy uslublari haqida o'quv qo'llanma.",
        type: "BOOK",
        url: "https://api.ziyonet.uz/uploads/books/26622/55d5b5d21649a.pdf"
    },
    {
        title: "Архивоведение: теория и методика (Е.М. Бурова)",
        description: "Arxiv ishi nazariyasi va metodologiyasi bo'yicha rus tilidagi eng nufuzli darsliklardan biri. Hujjatlarni saqlash va tizimlashtirishning jahon tajribasi.",
        type: "BOOK",
        url: "https://gsuda.gospmr.org/wp-content/uploads/2021/01/Бурова-Е.М.-и-др.-Архивоведение-теория-и-методика-2012_compressed-3.pdf"
    }
];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, item;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Ma'lumotlarni tozalash va qayta yuklash boshlandi...");
                    // Eskilarini o'chiramiz
                    return [4 /*yield*/, prisma.resource.deleteMany({})];
                case 1:
                    // Eskilarini o'chiramiz
                    _b.sent();
                    _i = 0, _a = __spreadArray(__spreadArray([], articles, true), books, true);
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    item = _a[_i];
                    return [4 /*yield*/, prisma.resource.create({ data: item })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log("Barcha resurslar (kitoblar va maqolalar) muvaffaqiyatli yangilandi!");
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
