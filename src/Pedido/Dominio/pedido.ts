export class Pedido{
    constructor(
        readonly id_pedido:number,
        readonly nombre:string,
        readonly direccion:string,
        readonly nip:string
    ){}
}