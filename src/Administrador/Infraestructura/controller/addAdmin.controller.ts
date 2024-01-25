import { Request, Response } from "express";
import { AddAdminCasoUso } from "../../Aplicacion/addAdmin.CasoUso";

export class AddAdminController{
    constructor(readonly addAdminCasoUso:AddAdminCasoUso){}
    async run(req:Request, res:Response){
        try{
            let id_admin = req.body.id_admin;
            let nombre = req.body.nombre;
            let password = req.body.password;
            console.log(req.body);

            let adminCreado = await this.addAdminCasoUso.run(id_admin,nombre,password);

            if(adminCreado){
                return res.status(200).send({
                    status:"success",
                    data:{
                        id_admin: adminCreado.id_admin,
                        nombre: adminCreado.nombre,
                        password:adminCreado.password
                    },
                    message:"Administrador guardado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error registrar administrador en addAdmin.controller"
                })
            }
        }catch(error){
            console.log("Error en addAdmin.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}