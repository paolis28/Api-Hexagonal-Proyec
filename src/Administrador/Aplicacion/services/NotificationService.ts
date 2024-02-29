import ampqblib from 'amqplib';

export interface INotificationService{
    provideChannel : ampqblib.Channel | undefined;

    inicializar (): Promise<boolean>;
    sendNotification(message:string):boolean;
}