import { Admin } from "./admin";

export interface AdminRepositorio{
    addAdmin(id_admin:number,nombre:string,password:string):Promise<Admin | null>;
}