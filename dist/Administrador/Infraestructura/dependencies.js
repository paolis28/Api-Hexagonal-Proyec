"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByIdAdminController = exports.getByIdAdminCasoUso = exports.deleteAdminController = exports.deleteAdminCasoUso = exports.addAdminController = exports.addAdminCasoUso = exports.sqlAdminRepositorio = void 0;
const sqlAdmin_repositorio_1 = require("./sqlAdmin.repositorio");
const addAdmin_CasoUso_1 = require("../Aplicacion/addAdmin.CasoUso");
const addAdmin_controller_1 = require("./controller/addAdmin.controller");
const deleteAdmin_CasoUso_1 = require("../Aplicacion/deleteAdmin.CasoUso");
const deleteAdmin_controller_1 = require("./controller/deleteAdmin.controller");
const getIdAdmin_CasoUso_1 = require("../Aplicacion/getIdAdmin.CasoUso");
const getIdAdmin_controller_1 = require("./controller/getIdAdmin.controller");
exports.sqlAdminRepositorio = new sqlAdmin_repositorio_1.SqlAdminRepositorio();
exports.addAdminCasoUso = new addAdmin_CasoUso_1.AddAdminCasoUso(exports.sqlAdminRepositorio);
exports.addAdminController = new addAdmin_controller_1.AddAdminController(exports.addAdminCasoUso);
exports.deleteAdminCasoUso = new deleteAdmin_CasoUso_1.DeleteAdminCasoUso(exports.sqlAdminRepositorio);
exports.deleteAdminController = new deleteAdmin_controller_1.DeleteAdminController(exports.deleteAdminCasoUso);
exports.getByIdAdminCasoUso = new getIdAdmin_CasoUso_1.GetByIdAdminCasoUso(exports.sqlAdminRepositorio);
exports.getByIdAdminController = new getIdAdmin_controller_1.GetByIdAdminController(exports.getByIdAdminCasoUso);
