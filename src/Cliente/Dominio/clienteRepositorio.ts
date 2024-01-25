import { Cliente } from "./cliente";

export interface ClienteRepositorio{
    addCliente(id_cliente:number, nombre:string):Promise<Cliente | null>;
}