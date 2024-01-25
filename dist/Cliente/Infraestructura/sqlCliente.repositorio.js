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
exports.SqlClienteRepositorio = void 0;
const cliente_1 = require("../Dominio/cliente");
const cliente_modelo_1 = __importDefault(require("./Model/cliente.modelo"));
class SqlClienteRepositorio {
    addCliente(id_cliente, nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clienteCreado = yield cliente_modelo_1.default.create({ id_cliente, nombre });
                return new cliente_1.Cliente(clienteCreado.id_cliente, clienteCreado.nombre);
            }
            catch (error) {
                console.log("Error en sqlCliente.repositorio", error);
                return null;
            }
        });
    }
}
exports.SqlClienteRepositorio = SqlClienteRepositorio;
