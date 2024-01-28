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
exports.SqlAdminRepositorio = void 0;
const admin_1 = require("../Dominio/admin");
const adminModel_1 = __importDefault(require("./Model/adminModel"));
class SqlAdminRepositorio {
    addAdmin(id_admin, nombre, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const adminCreado = yield adminModel_1.default.create({ id_admin, nombre, password });
                return new admin_1.Admin(adminCreado.id_admin, adminCreado.nombre, adminCreado.password);
            }
            catch (error) {
                console.log("Error en sqlAdmin.repositorio en AddAdmin", error);
                return null;
            }
        });
    }
    getIdAdmin(id_admin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getIdAdmin = yield adminModel_1.default.findOne({ where: { id_admin: id_admin } });
                if (getIdAdmin) {
                    yield getIdAdmin.get();
                    return new admin_1.Admin(getIdAdmin.id, getIdAdmin.nombre, getIdAdmin.password);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.log("Error en sqlAdmin.repositorio en GetIdAdmin", error);
                return null;
            }
        });
    }
    deleteAdmin(id_admin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const adminEliminado = yield adminModel_1.default.findOne({ where: { id_admin: id_admin } });
                if (adminEliminado) {
                    yield adminEliminado.destroy();
                    return new admin_1.Admin(adminEliminado.id, adminEliminado.nombre, adminEliminado.password);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.log("Error en sqlAdmin.repositorio en DeleteAdmin", error);
                return null;
            }
        });
    }
}
exports.SqlAdminRepositorio = SqlAdminRepositorio;
