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
exports.AddAdminController = void 0;
class AddAdminController {
    constructor(addAdminCasoUso) {
        this.addAdminCasoUso = addAdminCasoUso;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id_admin = req.body.id_admin;
                let nombre = req.body.nombre;
                let password = req.body.password;
                console.log(req.body);
                let adminCreado = yield this.addAdminCasoUso.run(id_admin, nombre, password);
                if (adminCreado) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            id_admin: adminCreado.id_admin,
                            nombre: adminCreado.nombre,
                            password: adminCreado.password
                        },
                        message: "Administrador guardado exitosamente"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "success",
                        data: [],
                        message: "Error registrar administrador en addAdmin.controller"
                    });
                }
            }
            catch (error) {
                console.log("Error en addAdmin.controller", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en el servidor"
                });
            }
        });
    }
}
exports.AddAdminController = AddAdminController;
