import express from 'express'
import { addAdminController, deleteAdminController } from './dependencies'

export const adminRouter = express.Router();

adminRouter.post('/agregarAdmin', addAdminController.run.bind(addAdminController));
adminRouter.delete('/eliminarAdmin', deleteAdminController.run.bind(deleteAdminController))