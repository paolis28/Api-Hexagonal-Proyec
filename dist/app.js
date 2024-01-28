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
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const cliente_routes_1 = require("./Cliente/Infraestructura/cliente.routes");
const admin_routes_1 = require("./Administrador/Infraestructura/admin.routes");
const signale_1 = require("signale");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use('/clientes', cliente_routes_1.clienteRouter);
app.use('/admins', admin_routes_1.adminRouter);
function iniciarServidor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, database_1.correrBaseDatos)();
            app.listen(3000, () => {
                signale.success("Servidor corriendo en el puerto 3000");
            });
        }
        catch (error) {
            signale.error("Error al iniciar el servidor", error);
        }
    });
}
iniciarServidor();
