import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'post_comment',
  updatedAt: false,
})
export class PostComment extends Model<PostComment> {
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  post_id: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  user_id: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  like: boolean;

  @Column({
    type: DataType.TEXT,
  })
  comment: string;
}
