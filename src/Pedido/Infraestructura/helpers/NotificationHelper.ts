import { INotificationService } from "../../Aplicacion/services/NotificationService";
import ampqlib from "amqplib"
import { Pedido } from "../../Dominio/pedido";


export class NotificationHelpers implements INotificationService {

    provideChannel : ampqlib.Channel | undefined;

    async inicializar () {
        try {
            const connection = await ampqlib.connect("amqp://paolis:paolis@54.165.239.162")
            this.provideChannel = await connection.createChannel()
            console.log("Conexion exitosa"); 
            return true
        } catch (error) {
            console.log("Error en el archivo NotificationHelper",error)
            return false
        }
        
    }

    sendNotification(PedidoCreado: Pedido): boolean {
        if(this.provideChannel === undefined) {
            return false
        }
        const exchange = "ColaPao";
        //revisa que exista y que los datos existan
        console.log(JSON.stringify(PedidoCreado.id_pedido));
        
        this.provideChannel.assertExchange(exchange, 'direct', {durable:true});
        this.provideChannel.publish(exchange, '123', Buffer.from(JSON.stringify(PedidoCreado.id_pedido)));
        console.log("Mensaje enviado al exchange");
        return true;
    }
}