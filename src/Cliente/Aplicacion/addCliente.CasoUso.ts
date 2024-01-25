import { Cliente } from "../Dominio/cliente";
import { ClienteRepositorio } from "../Dominio/clienteRepositorio";

export class AddClienteCasoUso{
    constructor(readonly clienteRepositorio: ClienteRepositorio){}
    async run(id:number,nombre:string):Promise<Cliente | null>{
        try {
            const clienteCreado = await this.clienteRepositorio.addCliente(id,nombre);
            return clienteCreado;
        } catch (error) {
            console.log("Error en addCliente.CasoUso", error);
            return null;
        }
    }
}