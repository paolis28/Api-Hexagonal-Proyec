import { Cliente } from "../cliente"

export interface INotificationNewCliente{
    sendNotification(cliente:Cliente):boolean;
}