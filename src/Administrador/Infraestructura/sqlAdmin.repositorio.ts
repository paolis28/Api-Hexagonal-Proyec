import { Admin } from "../Dominio/admin";
import { AdminRepositorio } from "../Dominio/adminRepositorio";
import AdminModel from "./Model/adminModel";

export class SqlAdminRepositorio implements AdminRepositorio{
    async addAdmin(id_admin: number, nombre: string, password: string): Promise<Admin | null> {
        try {
            const adminCreado = await AdminModel.create({id_admin,nombre,password});
            return new Admin(adminCreado.id_admin, adminCreado.nombre, adminCreado.password)
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio en AddAdmin", error);
            return null;
        }
    }

    async getIdAdmin(id_admin: number): Promise<Admin | null> {
        try {
            const getIdAdmin = await AdminModel.findOne({where: {id_admin:id_admin}});
            if(getIdAdmin){
                await getIdAdmin.get();
                return new Admin(getIdAdmin.id,getIdAdmin.nombre,getIdAdmin.password)
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio en GetIdAdmin", error);
            return null;
        }        
    }

    async deleteAdmin(id_admin: number): Promise<Admin | null> {
        try {
            const adminEliminado = await AdminModel.findOne({where: {id_admin:id_admin}});
            if(adminEliminado){
                await adminEliminado.destroy();
                return new Admin(adminEliminado.id,adminEliminado.nombre,adminEliminado.password);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio en DeleteAdmin", error);
            return null;
        }
    }

}