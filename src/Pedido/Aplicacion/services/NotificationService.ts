import ampqblib from 'amqplib';
import { Pedido } from '../../Dominio/pedido';

export interface INotificationService{
    provideChannel : ampqblib.Channel | undefined;

    inicializar (): Promise<boolean>;
    sendNotification(pedidoCreado:Pedido):boolean;
}