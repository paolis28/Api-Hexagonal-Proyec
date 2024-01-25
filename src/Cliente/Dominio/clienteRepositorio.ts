import { Cliente } from "./cliente";

export interface ClienteRepositorio{
    addCliente(id:number, nombre:string):Promise<Cliente | null>;
}