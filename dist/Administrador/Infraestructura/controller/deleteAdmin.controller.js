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
exports.DeleteAdminController = void 0;
class DeleteAdminController {
    constructor(deleteAdminCasoUso) {
        this.deleteAdminCasoUso = deleteAdminCasoUso;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id_admin = req.body.id_admin;
                console.log(req.body);
                let adminEliminado = yield this.deleteAdminCasoUso.run(id_admin);
                if (adminEliminado) {
                    res.status(200).send({
                        message: "Administrador eliminado exitosamente"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "success",
                        data: [],
                        message: "Error al eliminar administrador en deleteAdmin.controller"
                    });
                }
            }
            catch (error) {
                console.log("Error en deleteAdmin.controller", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en el servidor"
                });
            }
        });
    }
}
exports.DeleteAdminController = DeleteAdminController;
