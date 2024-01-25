import express from 'express';
import { addClienteController } from './dependencies';

export const clienteRouter = express.Router();

clienteRouter.post('/agregarCliente', addClienteController.run.bind(addClienteController));