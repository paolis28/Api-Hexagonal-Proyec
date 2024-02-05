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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAdminCasoUso = void 0;
class AddAdminCasoUso {
    constructor(adminRepositorio, encryPassHelper) {
        this.adminRepositorio = adminRepositorio;
        this.encryPassHelper = encryPassHelper;
    }
    run(id_admin, nombre, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Encrypass = yield this.encryPassHelper.encodePassword(password);
                const adminCreado = yield this.adminRepositorio.addAdmin(id_admin, nombre, Encrypass);
                return adminCreado;
            }
            catch (error) {
                console.log("Error en addAdmin.Caso.Uso", error);
                return null;
            }
        });
    }
}
exports.AddAdminCasoUso = AddAdminCasoUso;
