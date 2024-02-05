"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncriptServiHelpers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class EncriptServiHelpers {
    encodePassword(password) {
        const slats = 10;
        let pass = bcrypt_1.default.hash(password, slats);
        return pass;
    }
    authPassword(password, hashingPassword) {
        let result = bcrypt_1.default.compare(password, hashingPassword);
        return result;
    }
}
exports.EncriptServiHelpers = EncriptServiHelpers;
