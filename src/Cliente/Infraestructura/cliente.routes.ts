import express from 'express';
import { addClienteController,deleteClienteController } from './dependencies';

export const clienteRouter = express.Router();

clienteRouter.post('/', (req, res) => {
    addClienteController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo cliente.routes.ts');
    });
});

clienteRouter.delete('/eliminarCliente', (req, res) => {
    deleteClienteController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo cliente.routes.ts');
    });
});
