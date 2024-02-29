import { Pedido } from "../Dominio/pedido";
import { PedidoRepositorio } from "../Dominio/pedidoRepositorio";
import PedidoModel from "./Model/pedidoModel";

export class SqlPedidoRepositorio implements PedidoRepositorio{
    async addPedido(id_pedido: number, nombre: string, direccion: string,nip: string): Promise<Pedido | null> {
        try {
            const pedidoCreado = await PedidoModel.create({id_pedido,nombre,direccion,nip});
            return new Pedido(pedidoCreado.id_pedido, pedidoCreado.nombre, pedidoCreado.direccion,pedidoCreado.nip)
        } catch (error) {
            console.log("Error en sqlpedido.repositorio en AddPedido", error);
            return null;
        }
    }
}