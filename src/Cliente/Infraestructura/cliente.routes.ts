import express from 'express';
import { addClienteController,deleteClienteController } from './dependencies';


export const clienteRouter = express.Router();

clienteRouter.post('/agregarCliente', addClienteController.run.bind(addClienteController));
clienteRouter.delete('/eliminarCliente', deleteClienteController.run.bind(deleteClienteController));