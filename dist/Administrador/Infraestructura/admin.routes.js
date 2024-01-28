"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.adminRouter = express_1.default.Router();
exports.adminRouter.post('/agregarAdmin', dependencies_1.addAdminController.run.bind(dependencies_1.addAdminController));
exports.adminRouter.delete('/eliminarAdmin', dependencies_1.deleteAdminController.run.bind(dependencies_1.deleteAdminController));
exports.adminRouter.get('/', dependencies_1.getByIdAdminController.run.bind(dependencies_1.getByIdAdminController));
