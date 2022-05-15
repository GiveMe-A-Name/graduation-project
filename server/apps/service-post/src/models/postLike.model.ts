import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'post_like',
  createdAt: false,
  updatedAt: false,
})
export class PostLike extends Model<PostLike> {
  @Column({
    type: DataType.NUMBER,
    primaryKey: true,
  })
  post_id: number;

  @Column({
    type: DataType.NUMBER,
    primaryKey: true,
  })
  user_id: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  like: boolean;
}
