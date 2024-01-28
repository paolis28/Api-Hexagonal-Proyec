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
exports.DeleteAdminCasoUso = void 0;
class DeleteAdminCasoUso {
    constructor(adminRepositorio) {
        this.adminRepositorio = adminRepositorio;
    }
    run(id_admin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const eliminarAdmin = yield this.adminRepositorio.deleteAdmin(id_admin);
                return eliminarAdmin;
            }
            catch (error) {
                console.log("Error en deleteAdmin.Caso.Uso", error);
                return null;
            }
        });
    }
}
exports.DeleteAdminCasoUso = DeleteAdminCasoUso;
