import express from 'express'
import { addAdminController, deleteAdminController, getByIdAdminController } from './dependencies'

export const adminRouter = express.Router();

adminRouter.post('/agregarAdmin', (req, res) => {
    addAdminController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo admin.routes.ts');
    });
});

adminRouter.delete('/eliminarAdmin', (req, res) => {
    deleteAdminController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo admin.routes.ts');
    });
});

adminRouter.get('/', (req, res) => {
    getByIdAdminController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo admin.routes.ts');
    });
});
