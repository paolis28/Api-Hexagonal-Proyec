"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.clienteRouter = express_1.default.Router();
exports.clienteRouter.post('/', dependencies_1.addClienteController.run.bind(dependencies_1.addClienteController));
exports.clienteRouter.delete('/eliminarCliente', dependencies_1.deleteClienteController.run.bind(dependencies_1.deleteClienteController));
