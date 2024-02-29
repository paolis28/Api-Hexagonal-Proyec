import { Admin } from "../Dominio/admin";
import { AdminRepositorio } from "../Dominio/adminRepositorio";
import {EncriptServiHelpers} from "../Infraestructura/helpers/EncryptHelper";
import { NotificationHelpers } from "../Infraestructura/helpers/NotificationHelper";

export class AddAdminCasoUso{
    constructor(readonly adminRepositorio:AdminRepositorio, readonly encryPassHelper:EncriptServiHelpers, 
    readonly notificationHelpers:NotificationHelpers){}
    
    async run(id_admin:number,nombre:string,password:string):Promise<Admin | null>{
        try {
            const Encrypass = await this.encryPassHelper.encodePassword(password);
            const adminCreado = await this.adminRepositorio.addAdmin(id_admin,nombre,Encrypass);
            this.notificationHelpers.sendNotification("Se ha registrado un nuevo usuario");
            return adminCreado;
        } catch (error) {
            console.log("Error en addAdmin.Caso.Uso", error);
            return null;
        }
    }
}
