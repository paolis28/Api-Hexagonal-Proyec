import express from 'express'
import { addPedidoController} from './dependencies';

export const pedidoRouter = express.Router();

pedidoRouter.post('/', (req, res) => {
    addPedidoController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo pedido.routes.ts');
    });
});

