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
exports.correrBaseDatos = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const cliente_modelo_1 = __importDefault(require("../Cliente/Infraestructura/Model/cliente.modelo"));
dotenv_1.default.config();
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    database: process.env.DB,
    username: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 3306,
    models: [cliente_modelo_1.default]
});
function correrBaseDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            console.log("Conexión lograda");
            yield exports.sequelize.sync({ force: false });
        }
        catch (error) {
            console.log("No se puede conectar a la base de datos", error);
        }
    });
}
exports.correrBaseDatos = correrBaseDatos;
