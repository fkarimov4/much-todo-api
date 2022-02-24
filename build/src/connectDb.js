"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const credentials_json_1 = __importDefault(require("../credentials.json"));
const connectDb = () => {
    if (!(0, app_1.getApps)().length) {
        (0, app_1.initializeApp)({
            credential: (0, app_1.cert)(credentials_json_1.default),
        });
    }
    return (0, firestore_1.getFirestore)();
};
exports.connectDb = connectDb;
