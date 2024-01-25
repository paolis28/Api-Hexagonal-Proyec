import { Request, Response } from "express";
import { AddClienteCasoUso } from "../../Aplicacion/addCliente.CasoUso";

export class AddClienteController{
    constructor(readonly addClienteCasoUso:AddClienteCasoUso){}
    async run(req:Request, res:Response){
        try {
            let nombre = req.body.nombre;
            let id_cliente = req.body.id_cliente;
            console.log(req.body);
            
            let clienteCreado = await this.addClienteCasoUso.run(id_cliente,nombre);

            if(clienteCreado){
                return res.status(200).send({
                    status:"success",
                    data:{
                        id_cliente: clienteCreado.id_cliente,
                        nombre: clienteCreado.nombre
                    },
                    message:"Cliente creado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al agregar cliente en archivo addCliente.controller"
                })
            }
        } catch (error) {
            console.log("Error en addCliente.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}