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
exports.DeleteClienteController = void 0;
class DeleteClienteController {
    constructor(deleteClienteCasoUso) {
        this.deleteClienteCasoUso = deleteClienteCasoUso;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id_cliente = req.body.id_cliente;
                console.log(req.body);
                let clienteEliminado = yield this.deleteClienteCasoUso.run(id_cliente);
                if (clienteEliminado) {
                    res.status(200).send({
                        message: "Cliente eliminado exitosamente"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "success",
                        data: [],
                        message: "Error al eliminar cliente en deleteCliente.controller"
                    });
                }
            }
            catch (error) {
                console.log("Error en deleteCliente.controller", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en el servidor"
                });
            }
        });
    }
}
exports.DeleteClienteController = DeleteClienteController;
