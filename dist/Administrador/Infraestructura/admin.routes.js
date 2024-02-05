"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.adminRouter = express_1.default.Router();
exports.adminRouter.post('/agregarAdmin', (req, res) => {
    dependencies_1.addAdminController.run(req, res)
        .then(() => {
        return null;
    })
        .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo admin.routes.ts');
    });
});
exports.adminRouter.delete('/eliminarAdmin', (req, res) => {
    dependencies_1.deleteAdminController.run(req, res)
        .then(() => {
        return null;
    })
        .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo admin.routes.ts');
    });
});
exports.adminRouter.get('/', (req, res) => {
    dependencies_1.getByIdAdminController.run(req, res)
        .then(() => {
        return null;
    })
        .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo admin.routes.ts');
    });
});
