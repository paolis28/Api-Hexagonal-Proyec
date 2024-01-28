import { Admin } from "../Dominio/admin";
import { AdminRepositorio } from "../Dominio/adminRepositorio";

export class GetByIdAdminCasoUso{
    constructor(readonly adminRepositorio:AdminRepositorio){}
    async run(id_admin:number):Promise<Admin | null>{
        try {
            const buscarIdAdmin = await this.adminRepositorio.getIdAdmin(id_admin);
            return buscarIdAdmin;
        } catch (error) {
            console.log("Error en getIdAdmin.Caso.Uso", error);
            return null;
        }
    }
}