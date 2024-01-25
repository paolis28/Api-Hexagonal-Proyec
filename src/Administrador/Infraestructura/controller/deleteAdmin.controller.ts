import { Request, Response } from "express";
import { DeleteAdminCasoUso } from "../../Aplicacion/deleteAdmin.CasoUso";

export class DeleteAdminController{
    constructor(readonly deleteAdminCasoUso:DeleteAdminCasoUso){}
    async run(req:Request, res:Response){
        try {
            let id_admin = req.body.id_admin;
            console.log(req.body);

            let adminEliminado = await this.deleteAdminCasoUso.run(id_admin);

            if(adminEliminado){
                res.status(200).send({
                    message:"Administrador eliminado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al eliminar administrador en deleteAdmin.controller"
                })
            }
        } catch (error) {
            console.log("Error en deleteAdmin.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}