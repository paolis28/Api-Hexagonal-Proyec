"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.clienteRouter = express_1.default.Router();
exports.clienteRouter.post('/', (req, res) => {
    dependencies_1.addClienteController.run(req, res)
        .then(() => {
        return null;
    })
        .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo cliente.routes.ts');
    });
});
exports.clienteRouter.delete('/eliminarCliente', (req, res) => {
    dependencies_1.deleteClienteController.run(req, res)
        .then(() => {
        return null;
    })
        .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo cliente.routes.ts');
    });
});
