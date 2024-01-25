import express from 'express';
import {correrBaseDatos} from './database/database';
import { clienteRouter } from './Cliente/Infraestructura/cliente.routes';

const app = express();

app.use(express.json()); 
app.use('/cliente',clienteRouter);

async function iniciarServidor(){
    try {
        await correrBaseDatos();
        app.listen(3000, ()=>{
            console.log("Servidor corriendo en el puerto 3000");
        })
    } catch (error) {
        console.log("Error al iniciar el servidor", error);
    }
}

iniciarServidor();