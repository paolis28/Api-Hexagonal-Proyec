import express from 'express';
import {correrBaseDatos} from './database/database';
import { clienteRouter } from './Cliente/Infraestructura/cliente.routes';
import { adminRouter } from './Administrador/Infraestructura/admin.routes';
import {Signale} from 'signale';
import helmet from 'helmet';

const app = express();

const options = {
    secrets: ["([0-9]{4}-?)+"]
};

const signale = new Signale(options);

app.use(helmet());
app.use(express.json()); 
app.use('/clientes',clienteRouter);
app.use('/admins',adminRouter);

async function iniciarServidor(){
    try {
        await correrBaseDatos();
        app.listen(3000, ()=>{
            signale.success("Servidor corriendo en el puerto 3000");
        })
    } catch (error) {
        signale.error("Error al iniciar el servidor", error);
    }
}

iniciarServidor();