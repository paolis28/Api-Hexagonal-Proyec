import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Pedidos",
    timestamps:false
})
class PedidoModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id_pedido!:number

    @Column({
        type:DataType.STRING(15),
        allowNull:false
    })
    public nombre!:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    public direccion!:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    public nip!:string
}

export default PedidoModel;