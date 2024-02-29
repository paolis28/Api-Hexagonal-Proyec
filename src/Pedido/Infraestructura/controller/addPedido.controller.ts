import { Request, Response } from "express";
import { AddPedidoCasoUso } from "../../Aplicacion/addPedido.CasoUso";

export class AddPedidoController{
    constructor(readonly addPedidoCasoUso:AddPedidoCasoUso){}
    async run(req:Request, res:Response){
        try{
            let id_pedido = req.body.id_pedido;
            let nombre = req.body.nombre;
            let direccion = req.body.direccion;
            let nip = req.body.nip;
            console.log(req.body);

            let pedidoCreado = await this.addPedidoCasoUso.run(id_pedido,nombre,direccion,nip);

            if(pedidoCreado){
                return res.status(200).send({
                    status:"success",
                    data:{
                        id_pedido: pedidoCreado.id_pedido,
                        nombre: pedidoCreado.nombre,
                        direccion:pedidoCreado.direccion,
                        nip:pedidoCreado.nip
                    },
                    message:"Pedido guardado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error registrar administrador en addPedido.controller"
                })
            }
        }catch(error){
            console.log("Error en addPedido.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}