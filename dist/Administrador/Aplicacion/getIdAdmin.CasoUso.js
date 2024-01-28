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
exports.GetByIdAdminCasoUso = void 0;
class GetByIdAdminCasoUso {
    constructor(adminRepositorio) {
        this.adminRepositorio = adminRepositorio;
    }
    run(id_admin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const buscarIdAdmin = yield this.adminRepositorio.getIdAdmin(id_admin);
                return buscarIdAdmin;
            }
            catch (error) {
                console.log("Error en getIdAdmin.Caso.Uso", error);
                return null;
            }
        });
    }
}
exports.GetByIdAdminCasoUso = GetByIdAdminCasoUso;
