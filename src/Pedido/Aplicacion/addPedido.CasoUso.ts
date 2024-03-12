import { Pedido } from "../Dominio/pedido";
import { PedidoRepositorio } from "../Dominio/pedidoRepositorio";
import {EncriptServiHelpers} from "../Infraestructura/helpers/EncryptHelper";
import { NotificationHelpers } from "../Infraestructura/helpers/NotificationHelper";

export class AddPedidoCasoUso{
    constructor(readonly pedidoRepositorio:PedidoRepositorio, readonly encryPassHelper:EncriptServiHelpers, 
    readonly notificationHelpers:NotificationHelpers){}
    
    async run(id_pedido:number,nombre:string,direccion:string,nip:string):Promise<Pedido | null>{
        try {
            const Encrynip = await this.encryPassHelper.encodeNip(nip);
            const PedidoCreado = await this.pedidoRepositorio.addPedido(id_pedido,nombre,direccion,Encrynip);
            if(PedidoCreado)
            this.notificationHelpers.sendNotification(PedidoCreado);
            return PedidoCreado;
        } catch (error) {
            console.log("Error en addPedido.Caso.Uso", error);
            return null;
        }
    }
}
