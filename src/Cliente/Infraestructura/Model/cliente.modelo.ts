import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Clientes",
    timestamps:false
})
class ClienteModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id!:number;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    public nombre!:string;
}

export default ClienteModel;