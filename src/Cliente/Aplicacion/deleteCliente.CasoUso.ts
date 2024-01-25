import { Cliente } from "../Dominio/cliente";
import { ClienteRepositorio } from "../Dominio/clienteRepositorio";

export class DeleteClienteCasoUso{
    constructor(readonly clienteRepositorio:ClienteRepositorio){}
    async run(id_cliente:number):Promise<Cliente | null>{
        try {
            const eliminarCliente = await this.clienteRepositorio.deleteCliente(id_cliente);
            return eliminarCliente;
        } catch (error) {  
            console.log("Error en deleteCliente.Caso.Uso", error);
            return null;
        }
    }
}