import express from 'express'
import { addAdminController } from './dependencies'

export const adminRouter = express.Router();

adminRouter.post('/agregarAdmin', addAdminController.run.bind(addAdminController));