import { Pedido } from "./pedido";

export interface PedidoRepositorio{
    addPedido(id_pedido:number,nombre:string,direccion:string,nip:string):Promise<Pedido | null>;
}