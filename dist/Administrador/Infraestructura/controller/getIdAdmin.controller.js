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
exports.GetByIdAdminController = void 0;
class GetByIdAdminController {
    constructor(getByIdAdmin) {
        this.getByIdAdmin = getByIdAdmin;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id_admin = req.body.id_admin;
                console.log(req.body);
                let adminEncontrado = yield this.getByIdAdmin.run(id_admin);
                if (adminEncontrado) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            id_admin: adminEncontrado.id_admin,
                            nombre: adminEncontrado.nombre,
                            password: adminEncontrado.password
                        },
                        message: "Administrador encontrado exitosamente"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "success",
                        data: [],
                        message: "Error al buscar administrador por id en getIdAdmin.controller"
                    });
                }
            }
            catch (error) {
                console.log("Error en getIdAdmin.controller", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en el servidor"
                });
            }
        });
    }
}
exports.GetByIdAdminController = GetByIdAdminController;
