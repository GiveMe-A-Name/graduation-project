import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'news',
})
export class News extends Model<News> {
  @Column({
    type: DataType.STRING,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  content: string;

  @Column({
    type: DataType.NUMBER,
  })
  views: number;
}
