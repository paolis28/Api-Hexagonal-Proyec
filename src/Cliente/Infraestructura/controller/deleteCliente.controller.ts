import { Request, Response } from "express";
import { DeleteClienteCasoUso } from "../../Aplicacion/deleteCliente.CasoUso";

export class DeleteClienteController{
    constructor(readonly deleteClienteCasoUso:DeleteClienteCasoUso){}
    async run(req:Request, res:Response){
        try {
            let id_cliente = req.body.id_cliente;
            console.log(req.body);

            let clienteEliminado = await this.deleteClienteCasoUso.run(id_cliente);

            if(clienteEliminado){
                res.status(200).send({
                    message:"Cliente eliminado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al eliminar cliente en deleteCliente.controller"
                })
            }

        } catch (error) {
            console.log("Error en deleteCliente.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    } 
}