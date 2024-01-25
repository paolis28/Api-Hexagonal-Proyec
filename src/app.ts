import express from 'express';
import {correrBaseDatos} from './database/database';
import { clienteRouter } from './Cliente/Infraestructura/cliente.routes';
import { adminRouter } from './Administrador/Infraestructura/admin.routes';
import {Signale} from 'signale';

const app = express();
const signale = new Signale();

app.use(express.json()); 
app.use('/cliente',clienteRouter);
app.use('/admin',adminRouter);

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