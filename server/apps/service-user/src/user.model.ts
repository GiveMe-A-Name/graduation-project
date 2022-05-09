import { Column, Model, Table, DataType } from 'sequelize-typescript';
@Table({
  tableName: 'user',
  createdAt: false,
  updatedAt: false,
})
export class User extends Model<User> {
  @Column({
    type: DataType.NUMBER,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  nickname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
  })
  head_image: string;

  @Column({
    type: DataType.STRING,
  })
  realname: string;

  @Column({
    type: DataType.STRING,
  })
  sex: string;
}
