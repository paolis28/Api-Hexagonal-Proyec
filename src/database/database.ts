import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import ClienteModel from "../Cliente/Infraestructura/Model/cliente.modelo";
import AdminModel from "../Administrador/Infraestructura/Model/adminModel"
import PedidoModel from "../Pedido/Infraestructura/Model/pedidoModel";

dotenv.config();

export const sequelize = new Sequelize({
    dialect:"mysql",
    database:process.env.DB,
    username: process.env.USER, 
    password: process.env.PASSWORD,
    host:process.env.HOST,
    port:3306,
    models:[ClienteModel,AdminModel,PedidoModel]
});

export async function correrBaseDatos(){
    try {
        await sequelize.authenticate();
        console.log("Conexión lograda");
        await sequelize.sync({force:false});
    } catch (error) {
        console.log("No se puede conectar a la base de datos", error);
    }
}