import { Admin } from "../Dominio/admin";
import { AdminRepositorio } from "../Dominio/adminRepositorio";

export class AddAdminCasoUso{
    constructor(readonly adminRepositorio:AdminRepositorio){}
    async run(id_admin:number,nombre:string,password:string):Promise<Admin | null>{
        try {
            const adminCreado = await this.adminRepositorio.addAdmin(id_admin,nombre,password);
            return adminCreado;
        } catch (error) {
            console.log("Error en addAdmin.Caso.Uso", error);
            return null;
        }
    }
}

