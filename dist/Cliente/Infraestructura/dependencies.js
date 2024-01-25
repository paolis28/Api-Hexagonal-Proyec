"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClienteController = exports.addClienteCasoUso = exports.sqlClienteRepositorio = void 0;
const sqlCliente_repositorio_1 = require("./sqlCliente.repositorio");
const addCliente_CasoUso_1 = require("../Aplicacion/addCliente.CasoUso");
const addCliente_controller_1 = require("./controller/addCliente.controller");
exports.sqlClienteRepositorio = new sqlCliente_repositorio_1.SqlClienteRepositorio();
exports.addClienteCasoUso = new addCliente_CasoUso_1.AddClienteCasoUso(exports.sqlClienteRepositorio);
exports.addClienteController = new addCliente_controller_1.AddClienteController(exports.addClienteCasoUso);
