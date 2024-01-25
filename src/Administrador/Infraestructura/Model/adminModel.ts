import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Administradores",
    timestamps:false
})
class AdminModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id_admin!:number

    @Column({
        type:DataType.STRING(15),
        allowNull:false
    })
    public nombre!:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    public password!:string
}

export default AdminModel;