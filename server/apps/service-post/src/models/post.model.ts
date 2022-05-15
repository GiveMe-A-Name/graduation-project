import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'post',
})
export class Post extends Model<Post> {
  @Column({
    type: DataType.NUMBER,
  })
  user_id: number;

  @Column({
    type: DataType.STRING,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  content: string;

  @Column({
    type: DataType.STRING,
  })
  images: string;

  @Column({
    type: DataType.NUMBER,
  })
  like_num: number;

  @Column({
    type: DataType.STRING,
  })
  type: string;
}
