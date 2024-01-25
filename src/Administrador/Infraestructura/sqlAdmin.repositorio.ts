import { Admin } from "../Dominio/admin";
import { AdminRepositorio } from "../Dominio/adminRepositorio";
import AdminModel from "./Model/adminModel";

export class SqlAdminRepositorio implements AdminRepositorio{
    async addAdmin(id_admin: number, nombre: string, password: string): Promise<Admin | null> {
        try {
            const adminCreado = await AdminModel.create({id_admin,nombre,password});
            return new Admin(adminCreado.id_admin, adminCreado.nombre, adminCreado.password)
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio", error);
            return null;
        }
    }
}