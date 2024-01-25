import { Cliente } from "../Dominio/cliente";
import { ClienteRepositorio } from "../Dominio/clienteRepositorio";
import ClienteModel from "./Model/cliente.modelo";

export class SqlClienteRepositorio implements ClienteRepositorio{
    async addCliente(id_cliente: number, nombre: string): Promise<Cliente | null> {
        try {
            const clienteCreado = await ClienteModel.create({id_cliente,nombre});
            return new Cliente(clienteCreado.id_cliente, clienteCreado.nombre)
        } catch (error) {
            console.log("Error en sqlCliente.repositorio", error);
            return null;
        }
    }

    async deleteCliente(id_cliente: number): Promise<Cliente | null> {
        try {
            const clienteEliminado = await ClienteModel.findOne({where: {id_cliente:id_cliente}});
            if(clienteEliminado){
                await clienteEliminado.destroy();
                return new Cliente(clienteEliminado.id,clienteEliminado.nombre);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio en DeleteAdmin", error);
            return null;
        }
    }
}