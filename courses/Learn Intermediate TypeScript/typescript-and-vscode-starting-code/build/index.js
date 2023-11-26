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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const router_1 = __importDefault(require("@koa/router"));
const getSunriseAndSunset_1 = __importDefault(require("./getSunriseAndSunset"));
const app = new koa_1.default();
const router = new router_1.default();
router.get('sunrise and sunset time', '/sunrise-and-sunset', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const latitude = ctx.request.query.latitude;
    const longitude = ctx.request.query.longitude;
    if (!latitude || !longitude) {
        ctx.status = 500;
        ctx.body =
            'Internal Server Error. Error: missing latitude or longitude query parameters.';
        return;
    }
    const result = yield (0, getSunriseAndSunset_1.default)({
        latitude: Number(latitude),
        longitude: Number(longitude),
    });
    ctx.status = 200;
    ctx.body = result;
}));
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
console.log('Server running on localhost:3000');
