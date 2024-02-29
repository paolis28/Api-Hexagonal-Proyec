// import {INotificationNewCliente} from "../../Dominio/services/NotifyNewCliente"
// import { Cliente } from "../../Dominio/cliente"
// import amqplib from "amqplib"

// export class NotificationNewCliente implements INotificationNewCliente{
//     async sendNotification(cliente: Cliente):Promise<boolean>{
//         let ex = "upchiapas.as";
//         const conn=await amqplib.connect("amqps://amqps://cgphzolf:7eZnSAifTW6kGaN_D2oahZlbmtHB-QxG@shrimp.rmq.cloudamqp.com/cgphzolf");
//         const ch = await conn.createChannel();
//         await ch.publish(ex, '',Buffer.from('Something to do'));
//         let sms=()
//         let status = await ch.publish(ex, '', Buffer.from('Prueba de notificacion'))
//         return status;
//     }
// }

//ACA HAY UN ERROR